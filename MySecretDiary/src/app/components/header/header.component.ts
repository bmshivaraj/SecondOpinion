import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  pageTitle: string = "Second Opinion";
  loggedInUser: string;
  constructor() { }

  ngOnInit() {

    this.loggedInUser = sessionStorage.getItem('username');
    
  }

}
