import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/authen/services/login.service';
import { getAuth, signOut } from "firebase/auth";
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  signingOut(){
    signOut(getAuth()).then(() => {
      console.log("Signed out")
      console.log(getAuth())
    }).catch((error) => {
      console.log(error)
    });
  }
}
