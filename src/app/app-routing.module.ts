import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/common/components/home/home.component';
import { BooksComponent } from './modules/books/components/books/books.component';
import { LoginComponent } from './modules/authen/components/login/login.component';
import { AboutComponent } from './modules/common/components/about/about.component';
 
const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'books',
    component:BooksComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'about',
    component:AboutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
