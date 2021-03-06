import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { HeaderComponent } from './navigation/header/header.component';
import { MaterialModule } from '../material.module';




@NgModule({
  declarations: [
    HeaderComponent,
    NavtabsComponent,
    SidenavListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule

  ],
  exports: [
    HeaderComponent,
    NavtabsComponent,
    SidenavListComponent
  ]

})
export class CoreModule { }
