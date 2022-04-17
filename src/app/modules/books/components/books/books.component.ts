import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/modules/common/services/category.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  categories:any[] | undefined;
  books:any[] | undefined;

  constructor(private serviceCategory:CategoryService, private serviceBook:BookService) { }

  ngOnInit(): void {
    this.serviceCategory.getAllCategories()
                        .subscribe(categories=> this.categories=categories);
    this.serviceBook.getAllBooks()
                        .subscribe(books=> this.books=books);
                        
  }

}
