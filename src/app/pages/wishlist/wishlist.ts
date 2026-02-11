import { Component, inject } from '@angular/core';
import { recipesStore } from '../../recipes.store';
import { RecipesCard } from '../../Recipes-card/recipes-card';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { EmptyWishlist } from './empty-wishlist/empty-wishlist';

@Component({
  selector: 'app-wishlist',
  imports: [RecipesCard , MatIcon,MatIconButton,EmptyWishlist],
  templateUrl: './wishlist.html',
  styleUrl: './wishlist.css',
})
export class Wishlist {

  store = inject(recipesStore)

}
