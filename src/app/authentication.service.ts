import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

//authentication service is created to have methods to check for valid login and logout and 
//to perform session Storage set & remove item function
export class AuthenticationService {
    constructor() { }

    //This method is called to check for matching credentials entered
    authenticate(email : any, password : any){
        if(email === "vivekajol1113@gmail.com" && password === "Vive@1113"){
            sessionStorage.setItem('email', email)
            return true;
        }
        else{
            return false;
        }
    }
     // if a user logged in successfully , session storage is created and username is stored.
    isUserLoggedIn(){
        let user = sessionStorage.getItem('email')
        console.log(!(user === null))
        return !(user === null)
    }
    // when log out component gets called, this method removes session storage username.
    logOut(){
        sessionStorage.removeItem('email')
    }
}
