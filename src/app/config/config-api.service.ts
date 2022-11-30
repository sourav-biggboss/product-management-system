import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable, tap, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { LoaderService } from '../loader/loader.service';
import { ToastService } from '../toast-inline/toast.service';
@Injectable({
  providedIn: 'root'
})
export class ConfigApiService {

  public apiUrl = environment.apiUrl;
  public apiHostDomain =  environment.apiHostDomain;
  constructor(private http:HttpClient,private loaderService:LoaderService,private toastService:ToastService){}
  public handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(
      //   `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(error);
  }

  public commonApi<T>(action:string,modelName:string,data?:Object):Observable<T>{
    return this.http.post<T>(this.apiUrl+'common-api/'+action+'/'+modelName,data).pipe(tap(
      () => {
        this.loaderService.loader.next(false);
      },
      ()=>{
        this.loaderService.loader.next(false);
      },
      ()=>{
        this.loaderService.loader.next(false);
      }
    ));
  }

}


export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};