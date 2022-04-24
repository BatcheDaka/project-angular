// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import * as firebase from 'firebase/compat/app';
// import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/compat/app";

// @Injectable({
//   providedIn: 'root'
// })
// export class LoginService {

//   constructor(private login:AngularFireAuth) { 
//     this.login.authState.subscribe(user=>console.log(user))
//   }
//   loginWithGoogle()
//   {
//     return this.login.signInWithRedirect(new firebase.GoogleAuthProvider())
//   }
// }
import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { getAuth, signOut } from "firebase/auth";
import { UserService } from '../../users/services/user.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = firebase.auth()
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    private serviceUser:UserService
  ) {}
  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
        console.log(result.user);
   
       // console.log(getAuth())
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
signingOut(){
  signOut(getAuth()).then(() => {
    console.log("Signed out")
  //  console.log(getAuth())
  }).catch((error) => {
    console.log(error)
  });
}
  getCurrentUser(){
    console.log(this.GoogleAuth());
  }
  
}


