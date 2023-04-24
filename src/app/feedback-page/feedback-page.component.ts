import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.component.html',
  styleUrls: ['./feedback-page.component.css']
})
export class FeedbackPageComponent implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }
 
ngOnInit(){

}
feedbackSend(){
  var status = confirm("Feedback Submitted Thankyou!!");
  if(status==true){
    this.router.navigate(['students']);
  }
}

}
