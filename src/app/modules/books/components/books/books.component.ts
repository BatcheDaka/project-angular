import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, mergeMap, Subscription } from 'rxjs';
import { CategoryService } from 'src/app/modules/common/services/category.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit,OnDestroy {

  


  categories:any[] | undefined;
  books:any[] | undefined;
  sub:Subscription | undefined;

  constructor(private serviceCategory:CategoryService, private serviceBook:BookService) { }

  ngOnInit(): void {
    this.sub=this.serviceCategory.getAllCategories()
                      .pipe(
                        mergeMap(categories=>this.serviceBook.getAllBooks().pipe(
                          map(books=>[categories,books])
                        ))).subscribe(([categories,books])=>{
                          this.categories=categories;
                          this.books=books;
                          console.log(categories, books)
                        });
    //                     .subscribe(categories=> this.categories=categories);
    // this.serviceBook.getAllBooks()
    //                     .subscribe(books=> this.books=books);
                        
  }
  getBooksByCategory(key:any){
 
     return this.books?.filter(book=>book.category==key);
  }

  ngOnDestroy(): void {
  this.sub?.unsubscribe();
  } 
}
