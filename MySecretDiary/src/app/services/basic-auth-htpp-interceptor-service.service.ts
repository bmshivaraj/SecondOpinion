import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorServiceService implements HttpInterceptor {

  constructor() { }

  // intercept(req: HttpRequest<any>, next: HttpHandler) {

  //   if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
  //     req = req.clone({
  //       setHeaders: {
  //         Authorization: sessionStorage.getItem('basicauth')
  //       }
  //     })
  //   }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (sessionStorage.getItem('username') && sessionStorage.getItem('basicauth')) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem('basicauth')
        }
      })
    }
    
    return next.handle(req);
  }
}
