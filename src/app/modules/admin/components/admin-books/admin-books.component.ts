import { Component, OnInit } from '@angular/core';
import { map, mergeMap, Subscription } from 'rxjs';
import { BookService } from 'src/app/modules/books/services/book.service';
import { CategoryService } from 'src/app/modules/common/services/category.service';
import { ShoppingCartService } from 'src/app/modules/shoppingCart/services/shopping-cart.service';



@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.css']
})
export class AdminBooksComponent implements OnInit {
  categories:any[] | undefined;
  books:any[] | undefined;
  sub:Subscription | undefined;
  columnsToDisplay: string[] = ['title', 'description', 'category', 'urlImage', 'price']
  constructor(private serviceCategory:CategoryService, private serviceBook:BookService, private serviceShoppingCart:ShoppingCartService) { }

  ngOnInit(): void {
    this.sub=this.serviceCategory.getAllCategories()
    .pipe(
      mergeMap(categories=>this.serviceBook.getAllBooks().pipe(
        map(books=>[categories,books])
      ))).subscribe(([categories,books])=>{
        this.categories=categories;
        this.books=books;
        console.log(books)
      });
  }

}
