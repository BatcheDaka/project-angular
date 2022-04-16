import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-angular'
  constructor(private db:AngularFireDatabase)
 {
  

  }
  ngOnInit(): void {
    this.db.list('/books').valueChanges()
                          .subscribe(books=>console.log(books));
  }

}
