import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from "../environments/environment";
import { LoaderService } from "./loader/loader.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private loaderService:LoaderService) {

  }

  login(email:string, password:string ) {
    this.loaderService.loader.next(true);
      return this.http.post<LoginApiResponse>(environment.apiUrl+'login', {email, password})
          .pipe(tap(
            (userData) => {
              this.loaderService.loader.next(false);
              this.setSession(userData.authorisation);
            },
            (err)=>{
              this.loaderService.loader.next(false);
            },
            ()=>{
              
              this.loaderService.loader.next(false);
            }
          ));
  }
        
  private setSession(authResult:Authorisation) {
      localStorage.setItem('token', authResult.token);
  }          

  logout() {
      localStorage.removeItem("token");
  }

  public isLoggedIn() {
      return localStorage.getItem('token') !== undefined || localStorage.getItem('token') !== null;
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }
  
}
export interface LoginApiResponse {
  status: string;
  user: UserApi;
  authorisation: Authorisation;
}
export interface UserApi {
  id: number;
  name: string;
  email: string;
  email_verified_at?: null;
  created_at: string;
  updated_at: string;
  verified: number;
  verification_token?: null;
}
export interface Authorisation {
  token: string;
  expiresIn?:string;
  type: string;
}
