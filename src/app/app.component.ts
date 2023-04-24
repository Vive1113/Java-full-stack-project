import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

//app component is the root component of any angular project.
//here, constructor of this class is created with paramters of router and authentication service
//confirmLogout method is created to show popup and get confirmation for logging out
export class AppComponent {
  title = 'Student Management';
  constructor(public loginService:AuthenticationService) { }
  ngOnInit() {
    
  }
}

