import { NgModule } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MaterialModule} from 'src/app/material-ui.module'
import { AppRoutingModule } from 'src/app/app-routing.module';
@NgModule({
    declarations: [
    NavigationComponent
  ],
    imports: [
        MaterialModule,
        AppRoutingModule
    ],
    exports: [
        NavigationComponent  
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleMenu { }