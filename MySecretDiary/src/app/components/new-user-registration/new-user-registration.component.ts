import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegUser } from 'src/app/models/reg-user';
import { AuthenticationServiceService } from '@services/authentication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user-registration',
  templateUrl: './new-user-registration.component.html',
  styleUrls: ['./new-user-registration.component.css']
})
export class NewUserRegistrationComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean=false;
  loading = false;
  
  
  constructor(private as : AuthenticationServiceService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl('')
     
    })
  }

     // convenience getter for easy access to form fields
     get f() { return this.loginForm.controls; }

  save()
  {
    console.log("save User function...");

    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    console.log("loginForm : "+ this.loginForm.value.username);
    console.log("loginForm : "+ this.loginForm.value.password);
    
    const regUser = new RegUser();
    regUser.username = this.loginForm.value.username;
    regUser.password = this.loginForm.value.password;
    regUser.email = this.loginForm.value.email;

    this.as.saveNewUser(regUser).subscribe(usr => {
      window.alert('User Created successfully!');
      this.router.navigate(['/']);
    }, (err) => {}, () => {})
      
    
    
  }

 

}
