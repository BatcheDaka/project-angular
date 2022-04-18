import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-ui.module';
import { LoginComponent } from './components/login/login.component';


@NgModule({
    declarations: [
      LoginComponent
  ],
    imports: [
  MaterialModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleAuth { }