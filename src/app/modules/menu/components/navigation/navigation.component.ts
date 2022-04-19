import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/authen/services/login.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
//import firebase from 'firebase/compat';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth, signOut } from "firebase/auth";
import firebase from "firebase/compat/app";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

   user = firebase.auth()
  constructor(
    public afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {
  
  }
  
  
  signingOut(){
    signOut(getAuth()).then(() => {
      console.log("Signed out")
     // console.log(getAuth().currentUser)
    }).catch((error) => {
      console.log(error)
    });
  }
  getCurrentUser(){
    getAuth().onAuthStateChanged(() => {
   //  return getAuth().currentUser
   console.log(this.user);
    })
  }
 
}


