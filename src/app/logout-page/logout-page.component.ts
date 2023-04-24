import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.css']
})
export class LogoutPageComponent  implements OnInit {

  constructor(
    private authentocationService: AuthenticationService,
    private router: Router) {

  }

  // whenever log out button pressed from any page, naviagtes to this component.
  // first executes ngOnit method and logout method in authentication service class is called.

ngOnInit():  void {
    this.authentocationService.logOut();
    this.router.navigate(['logout-page']);
  }
}
  

  
 





  


