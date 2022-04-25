import { NgModule } from '@angular/core';
import { AdminBooksComponent } from './components/admin-books/admin-books.component';
import { MatTableModule } from '@angular/material/table'
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material-ui.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    declarations: [
    AdminBooksComponent
  ],
    imports: [
      MatTableModule,
      CommonModule,
      MaterialModule,
      FlexLayoutModule,
      BrowserModule
    ],
    exports:[AdminBooksComponent],
    providers: [],
    bootstrap: []
  })
  export class AppModuleAdmin { }