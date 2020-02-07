import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { RegUser } from '../models/reg-user';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ConstantsService } from './constants.service';

//const baseUrl = 'http://localhost:8080/';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  username: string;
  password: string;
  baseUrl: string;

  constructor(private http: HttpClient, _constant: ConstantsService ) {
    this.baseUrl = _constant.baseAppUrl;
   }

  authenticateUser(regUser: RegUser) {
    console.log(this.http.get(this.baseUrl + 'authenticate'));
    this.username = regUser.username;
    this.password = regUser.password;
   
   //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });

    //return this.http.post(baseUrl + 'authenticate', regUser).map(resp => resp as RegUser[]);
    return this.http.post(this.baseUrl + 'authenticate', regUser).map(
      (userData:any) => {
          sessionStorage.setItem('username', this.username);
          //let authString = 'Basic ' + btoa(this.username + ':' + this.password);
          let tokenStr = 'Bearer '+userData.token;
          sessionStorage.setItem('basicauth', tokenStr);
          return userData;
        }
    )
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    if(user==null)
    {
      console.log("please login!");
      window.alert('Please login as a registered user!');
    }
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    let user = sessionStorage.getItem('username')
    console.log("session user:"+user);
    sessionStorage.removeItem('username')
  }

  saveNewUser(regUser: RegUser): Observable<RegUser> {
    console.log(this.http.get(this.baseUrl + 'register'));
    //const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.http.post(this.baseUrl+'register', regUser).map(resp => resp as RegUser);    
  }

  getRegUsers() : Observable<RegUser[]>
  {
    console.log(this.http.get(this.baseUrl + 'regUsers'));

   // const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });

    return this.http.get<RegUser[]>(this.baseUrl + 'regUsers');
  }
}
