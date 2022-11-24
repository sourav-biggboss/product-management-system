import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from "../environments/environment";
import { LoaderService } from "./loader/loader.service";
import { ToastService } from './toast-inline/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,private loaderService:LoaderService,private toastService:ToastService) {

  }

  login(email:string, password:string ) {
    this.loaderService.loader.next(true);
      return this.http.post<LoginApiResponse>(environment.apiUrl+'login', {email, password})
          .pipe(tap(
            (userData:LoginApiResponse) => {
              this.loaderService.loader.next(false);
              this.saveUser(userData);
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

  signup(name:string|null,email:string, password:string,number:string) {
    this.loaderService.loader.next(true);
      return this.http.post<SignUpApiResponse>(environment.apiUrl+'register', {name,email, password})
          .pipe(tap(
            (userData:SignUpApiResponse) => {
              this.loaderService.loader.next(false);
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
      return localStorage.getItem('token') != null;
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  public saveUser(user: LoginApiResponse): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
  public getUser(): LoginApiResponse | {} {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
  
}

const USER_KEY = '_user';

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

export interface SignUpApiResponseUser {
  name: string;
  email: string;
  updated_at: Date;
  created_at: Date;
  id: number;
}

export interface AuthorisationSignUp {
  token: string;
  type: string;
}

export interface SignUpApiResponse {
  status: string;
  message: string;
  user: SignUpApiResponseUser;
  authorisation: AuthorisationSignUp;
}
