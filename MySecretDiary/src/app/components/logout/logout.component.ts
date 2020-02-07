import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '@services/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  sessionUser: string;

  constructor(private as : AuthenticationServiceService,
    private router: Router) { }

  ngOnInit() {

    console.log("calling this.as.logOut");
    this.as.logOut();
    this.router.navigate(['/']);

    this.sessionUser = this.readLocalStorageValue('username');

  }

  readLocalStorageValue(key: string): string {
    //return localStorage.getItem(key);
    return sessionStorage.getItem('username');
  }

}
