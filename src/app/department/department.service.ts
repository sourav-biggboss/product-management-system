import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { ConfigApiService } from '../config/config-api.service';
import { LoaderService } from '../loader/loader.service';
import { ToastService } from '../toast-inline/toast.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient,private configApi:ConfigApiService,private loaderService:LoaderService,private toastService:ToastService) { }


  fetchDepartments(id?:number){
    this.loaderService.loader.next(true);
    return this.http.get<DepartmentDetailsApiInterface[]>(this.configApi.apiUrl+'department/index/'+(id ?? '')).pipe(tap(
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
  deleteDepartment(id:number){
    this.loaderService.loader.next(true);
    return this.http.delete<{status:string}>(this.configApi.apiUrl+'department/delete/'+id).pipe(tap(
      (data) => {
        this.loaderService.loader.next(false);
        if (data.status == 'success') {
          this.toastService.showSuccess('Deleted');
        } else {
          this.toastService.showSuccess('Failed Delete');
        }
      },
      (err)=>{
        this.loaderService.loader.next(false);
        this.toastService.showSuccess('Failed Delete');
      },
      ()=>{
        this.loaderService.loader.next(false);
      }
    ));
  }

  updateDepartment(formDate:DepartmentDetailsFormInterface,id:number){
    this.loaderService.loader.next(true);
      
    return this.http.put<{status:string}>(this.configApi.apiUrl+'department/update/'+id,formDate).pipe(tap(
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

  addDepartment(formDate:DepartmentDetailsFormInterface){
    this.loaderService.loader.next(true);
      
    return this.http.post<{status:string}>(this.configApi.apiUrl+'department/create/',formDate).pipe(tap(
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
}

export interface DepartmentDetailsApiInterface {
  id:number,name: string, updated_at:string,created_at: string
}

export interface DepartmentDetailsFormInterface {
  name?: string | null
}
