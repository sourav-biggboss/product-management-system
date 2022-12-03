import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ConfigApiService } from '../config/config-api.service';
import { LoaderService } from '../loader/loader.service';
import { ToastService } from '../toast-inline/toast.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient,private configApi:ConfigApiService,private loaderService:LoaderService,private toastService:ToastService) { }

  fetchUser(id?:number,offset = 0,limit = 30,filter?:Object){
    this.loaderService.loader.next(true);
    let queryParams = new HttpParams();
    queryParams = queryParams.append('offset', offset);
    queryParams = queryParams.append('limit', limit);
    if(filter){
      queryParams = queryParams.append('filter', JSON.stringify(filter));
    }
    return this.http.get<UserDetailsApiInterface[]>(this.configApi.apiUrl+'profile/index/'+(id ?? ''),{
      params : queryParams
    }).pipe(tap(
      (data) => {
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

  fetchUserWithDepartment(id:number){
    this.loaderService.loader.next(true);
    return this.http.get<UserDetailsApiInterfaceWithDepartment[]>(this.configApi.apiUrl+'profile/index/'+(id ?? '')).pipe(tap(
      (data) => {
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

  addUser(formDate:UserDetailsFormInterface){
    this.loaderService.loader.next(true);
      
    return this.http.post<{status:string}>(this.configApi.apiUrl+'profile/create/',formDate).pipe(tap(
      (data) => {
        this.loaderService.loader.next(false);
        if (data.status == 'success') {
          this.toastService.showSuccess('Added');
        } else {
          this.toastService.showSuccess('Failed Added');
        }
      },
      (err)=>{
        this.loaderService.loader.next(false);
        this.toastService.showSuccess('Failed Added');
      },
      ()=>{
        this.loaderService.loader.next(false);
      }
    ));
  }

  updateUser(formDate:UserDetailsFormInterface,id:number){
    const headers = new HttpHeaders()
      .append('Content-Type', 'multipart/form-data');
      
    return this.http.put<{status:string}>(this.configApi.apiUrl+'profile/update/'+id,formDate).pipe(tap(
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

  deleteUser(id:number){
    return this.http.delete<{status:string}>(this.configApi.apiUrl+'profile/delete/'+id).pipe(tap(
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

export interface UserDetailsFormInterface {
  name:string,
  photo?:File,
  roll?:string,
  email:string,
  password:string,
  cv?:File,
  number:number,
  department_id:number,
  salary:number,
}
export interface UserDetailsApiInterface {
  id:number,
  name:string,
  photo_path:string | null,
  roll:string | null,
  email:string,
  password:string | null,
  cv_path:string | null,
  document_path:string | null,
  number:number | null,
  department_id:number | null,
  salary:number | null,
  address:string | null,
  department_name:string,
}
export interface UserDetailsApiInterfaceWithDepartment extends UserDetailsApiInterface {
  department_name:string,
  department_description:string | null
} 

