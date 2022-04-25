import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  booksShopping:any[] | undefined;
  displayedColumns: string[] = ['title', 'description','urlImage','price','actions'];

  constructor(private shoppingCart:ShoppingCartService) { }

  ngOnInit() {
    this.shoppingCart.getListItemsShoppingCartMapCourses()
                    .subscribe(books=>this.booksShopping=books);
  }
  getTotal()
  {
    let total:number=0;
    (this.booksShopping as any[]).forEach((course: { price: number; })=>{
      total=total + course.price
    })
    return total;
  }
  Delete(row: { key: string; })
  {
    this.shoppingCart.deleteCourseShoppingCart(row.key);
  }

}
