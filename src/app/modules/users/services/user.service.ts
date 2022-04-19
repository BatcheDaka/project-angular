import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import firebase from "firebase/compat/app";


import { getAuth, signOut } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user = firebase.auth()
  constructor(private db:AngularFireDatabase) { }

  saveUser(user: { uid: any; displayName: any; email: any}){
this.db.object('/users/'+user.uid).update({
  name: user.displayName,
  email: user.email
})
  }
}
