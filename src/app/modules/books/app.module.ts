import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material-ui.module';
import { BooksComponent } from './components/books/books.component';

@NgModule({
    declarations: [
    BooksComponent
  ],
    imports: [
  MaterialModule
    ],
    providers: [],
    bootstrap: []
  })
  export class AppModuleBooks { }