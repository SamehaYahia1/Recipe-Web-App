import { Component, inject, input } from '@angular/core';
import { recipesStore } from '../../recipes.store';
import { Meal } from '../../models/meal.model';
import { CommonModule } from '@angular/common';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-toggle-wishlist-button',
  imports: [
      MatIcon,
    CommonModule,
    MatIconButton
  ],
  templateUrl: './toggle-wishlist-button.html',
  styleUrl: './toggle-wishlist-button.css',
})
export class ToggleWishlistButton {
  store = inject(recipesStore);
  recipe= input.required<Meal>();

   isInWhishList(meal: Meal) {
    return this.store.wishList().some(m => m.idMeal === meal.idMeal);
  }

  toggleWishList(meal: Meal) {
    if (this.isInWhishList(meal)) {
      this.store.removeFromWishList(meal);
    } else {
      this.store.addToWishList(meal);
    }
  }

//   isInWishList(product: Product) {
//   return this.store.wishListItem().some(p => p.productId === product.productId);
// }


//   toggleWishList(product:Product){
//     if(this.isInWishList(product)){
//       this.store.removeFromWishList(product);
//       return;
//       //REMOVE
//     }else{
//       this.store.addToWishList(product);
//     }


//   }

}
