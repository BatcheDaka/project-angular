import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private db:AngularFireDatabase) { }
  getAllBooks()
  {
  return this.db.list('/books')
             .snapshotChanges()
             .pipe(
               map(
                change=>change.map(c=>({
                  key:c.payload.key, ...(c.payload.val() as {})
                  
                }))
               )
             )
  }
}
