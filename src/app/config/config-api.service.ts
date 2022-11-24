import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ConfigApiService {

  public apiUrl = environment.apiUrl;
  public apiHostDomain =  environment.apiHostDomain;

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

}


export const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};