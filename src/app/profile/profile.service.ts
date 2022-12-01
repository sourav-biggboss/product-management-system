import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ConfigApiService } from '../config/config-api.service';
import { LoaderService } from '../loader/loader.service';
import { ToastService } from '../toast-inline/toast.service';
import { UserDetailsApiInterface, UserDetailsFormInterface } from './profile.component';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient,private configApi:ConfigApiService,private loaderService:LoaderService,private toastService:ToastService) { }

  fetchEmp(id?:number){
    return this.http.get<UserDetailsApiInterface | undefined>(this.configApi.apiUrl+'profile/edit/'+(id ?? '')).pipe(tap(
      (userData) => {
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

  updateUser(formDate:UserDetailsFormInterface,id?:number){
    const headers = new HttpHeaders()
      .append('Content-Type', 'multipart/form-data');
      
    return this.http.put<{status:string}>(this.configApi.apiUrl+'profile/update/'+(id ?? ''),formDate).pipe(tap(
      (data) => {
        this.loaderService.loader.next(false);
        if (data.status == 'success') {
          this.toastService.showSuccess('Updated');
        } else {
          this.toastService.showSuccess('Failed Updated');
        }
      },
      (err)=>{
        this.loaderService.loader.next(false);
        this.toastService.showSuccess('Failed Updated');
      },
      ()=>{
        this.loaderService.loader.next(false);
      }
    ));
  }

  deleteUser(id?:number){
    return this.http.delete<{status:string}>(this.configApi.apiUrl+'profile/delete/'+(id ?? '')).pipe(tap(
      (data) => {
        this.loaderService.loader.next(false);
        if (data.status == 'success') {
          this.toastService.showSuccess('Updated');
        } else {
          this.toastService.showSuccess('Failed Updated');
        }
      },
      (err)=>{
        this.loaderService.loader.next(false);
        this.toastService.showSuccess('Failed Updated');
      },
      ()=>{
        this.loaderService.loader.next(false);
      }
    ));
  }

}
