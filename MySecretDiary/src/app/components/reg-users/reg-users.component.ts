import { Component, OnInit } from '@angular/core';

import { RegUser } from 'src/app/models/reg-user';
import { AuthenticationServiceService } from '@services/authentication-service.service';

@Component({
  selector: 'app-reg-users',
  templateUrl: './reg-users.component.html',
  styleUrls: ['./reg-users.component.css']
})
export class RegUsersComponent implements OnInit {

  regUsers: RegUser[] = [];
  errorMessage: string;

  constructor(
    private as:AuthenticationServiceService
  ) { }


  ngOnInit() {

    this.as.getRegUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.errorMessage = <any>error
     );

  }

handleSuccessfulResponse(response)
{
    this.regUsers=response;
}


}
