
import {Component} from '@angular/core';
import {Router } from '@angular/router';
import {AuthenticationService } from '../authentication.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
 
  
})
export class LoginPageComponent implements OnInit {

  email = '';
  password = '';
  invalidLogin = false
  emessage: string | undefined;

  
   constructor(private router: Router,
   private loginservice: AuthenticationService) { }
 
  ngOnInit(){  
  }
  
   /* This method is called when clicking on login button.
     if email and password is matched, successfully navigates to studemt list page.
     Else, shows Invalid login message.*/
  checkLogin() {

    if (this.loginservice.authenticate(this.email, this.password)
    ) {
    this.router.navigate(['students']); console.log("navigate..");
    console.log("navigate..");
    this.invalidLogin=false;
    }else
    this.invalidLogin=true;
    this.emessage ="Enter correct Email or Password!!";
    }
  }


