import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/app/material-ui.module';
import { BooksComponent } from './components/books/books.component';

@NgModule({
    declarations: [
    BooksComponent
  ],
    imports: [
  MaterialModule,
  BrowserModule,
  CommonModule,
  FlexLayoutModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleBooks { }