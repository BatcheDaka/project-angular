import { NgModule } from '@angular/core';
import { list } from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
//import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './material-ui.module';
import { AppModuleAdmin } from './modules/admin/app.module';
import { AppModuleAuth } from './modules/authen/app.module';
import { AppModuleCommon } from './modules/common/app.module';
import { AppModuleBooks } from './modules/books/app.module';
import { AppModuleMenu } from './modules/menu/app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
   // MatSliderModule,
    MaterialModule,
    AppModuleAdmin,
    AppModuleAuth,
    AppModuleCommon,
    AppModuleBooks,
    AppModuleMenu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
