import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  fullName = '';
  email = '';
  message ='';
 

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }
 
ngOnInit(){

}
sendMessage(){
  if(this.fullName === '' || this.email === '' || this.message === ''){
    var status = confirm("Please fill all the fields");
  }
  else{
  var status = confirm("Your message was received");
  if(status==true){
    this.router.navigate(['login-page']);
  }
}
}

}
