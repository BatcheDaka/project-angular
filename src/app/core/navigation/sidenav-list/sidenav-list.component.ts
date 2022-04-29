import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserComponent } from 'src/app/user/user.component';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  userData: any;
  @Output() closeSideNavigation = new EventEmitter();

  constructor(
    public authService: AuthService,
    private router: Router,
    public afAuth: AngularFireAuth
  ) {  this.afAuth.authState.subscribe((user) => {
    if (user) {
      this.userData = user;
      localStorage.setItem('user', JSON.stringify(this.userData));
      JSON.parse(localStorage.getItem('user')!);
    } else {
      localStorage.setItem('user', 'null');
      JSON.parse(localStorage.getItem('user')!);
    }
  });}
  

  ngOnInit() {
  }
  logout() {
    this.authService.doLogout()
      .then((res) => {
        this.router.navigate(['/']);
      }, (error) => {
        console.log('Logout error', error);
      });
      console.log(this.userData)
  }
  onToggleClose() {
    this.closeSideNavigation.emit();
    console.log(this.userData)
  }

  isUserLogged() {
    if (localStorage.user == "null") {
     return false;
    } else {
      return true;
    }
  }

}
