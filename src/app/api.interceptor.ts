import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { ConfigApiService } from "./config/config-api.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(private configApiService:ConfigApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let domain = (new URL(request.url));
    const cloned = request.clone({
      headers: request.headers.set("Access-Control-Allow-Origin",
          "*")
    });

  return next.handle(cloned);
  }
}
export const ApiHttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
];
