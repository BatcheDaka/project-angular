import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { }

  async AddToCart(book: any)
  {
    let cartId=localStorage.getItem('cartId');
    if(!cartId)
    {
     let cart: any = await this.db.list('/shoppingCart').push({
        dateCreated:new Date().getTime()
      });
      localStorage.setItem('cartId',cart.key)
      this.AddCourseCart(cart.key,book)
    }
    else
    {
      this.AddCourseCart(localStorage.getItem('cartId'),book);
    }
  }
  AddCourseCart(idCart: string | null,bookAdd: { key: FirebaseOperation; })
  {
    console.log('addCourse',bookAdd);
    this.db.object('/shoppingCart/'+idCart+'/items/'+bookAdd.key)
             .snapshotChanges()
             .pipe(
               take(1)
             ).subscribe(
              courseCart=>{
                console.log(courseCart);
                 if(!courseCart.key)
                 {
                   this.db.list('/shoppingCart/'+idCart+'/items/').set(bookAdd.key,{book:bookAdd})
                 }
               }
             )

  }

  getListItemsShoppingCart()
  {
    let cartId=localStorage.getItem('cartId');
   return this.db.list('/shoppingCart/'+cartId+'/items/')
            .snapshotChanges()
            .pipe(

              map(courses =>
                      courses.map(c => (
                           { 
                            
                             key: c.payload.key, ...(c.payload.val() as {}) 
                           }
                           ))
            ))

   
  }
  deleteCourseShoppingCart(id:string)
  {
    let cartId=localStorage.getItem('cartId');
    return this.db.object('/shoppingCart/'+cartId+'/items/'+id).remove();
  }

  getListItemsShoppingCartMapCourses()
  {
    let cartId=localStorage.getItem('cartId');
   return this.db.list('/shoppingCart/'+cartId+'/items/')
            .snapshotChanges()
            .pipe(

              map(books =>
                      books.map(c => (
                           { 
                            
                             key: c.payload.key, ...(c.payload.val() as any).course
                           }
                           ))
            ))

   
  }
}