import { Component, inject, OnInit, signal } from '@angular/core';
import { RecipesCard } from '../../Recipes-card/recipes-card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { recipesStore } from '../../recipes.store';
import { Categories } from '../../pages/categories/categories';
import { ToggleWishlistButton } from '../../components/toggle-wishlist-button/toggle-wishlist-button';
import { AboutUs } from '../../pages/about-us/about-us';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RecipesCard, CommonModule,FormsModule, Categories,ToggleWishlistButton,AboutUs],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage  {

  store = inject(recipesStore);

}
