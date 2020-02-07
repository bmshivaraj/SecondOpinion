import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { RegUser } from 'src/app/models/reg-user';
import { AuthenticationServiceService } from '@services/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;
  private formSubmitAttempt: boolean;
  loggedInUser: string;
  
  constructor(private as : AuthenticationServiceService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
     
    })
  }

  login()
  {
    console.log("inside login method...");
    console.log("username :"+this.loginForm.value.username);

    const regUser = new RegUser();
   regUser.username = this.loginForm.value.username;
   regUser.password = this.loginForm.value.password;

   this.as.authenticateUser(regUser).subscribe(usr => {
         window.alert('User Authentication successfull!');
         this.formSubmitAttempt = true;
         this.loggedInUser = this.loginForm.value.username;
         this.router.navigate(['/']);
      }, (err) => { window.alert('User Authentication failed!'); }, () => {})

  }
}

// save()
// {
//   console.log("save User function...");

//   this.submitted = true;

//   // stop here if form is invalid
//   if (this.loginForm.invalid) {
//       return;
//   }

//   this.loading = true;
//   console.log("loginForm : "+ this.loginForm.value.username);
//   console.log("loginForm : "+ this.loginForm.value.password);
  
//   const regUser = new RegUser();
//   regUser.username = this.loginForm.value.username;
//   regUser.password = this.loginForm.value.password;

//   this.as.saveNewUser(regUser).subscribe(usr => {
//     window.alert('User Created successfully!');
//     this.router.navigate(['/']);
//   }, (err) => {}, () => {})
    
  
  
// }
