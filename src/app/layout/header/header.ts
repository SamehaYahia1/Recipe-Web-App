import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatBadge } from '@angular/material/badge';
import { Router, RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { recipesStore } from '../../recipes.store';


@Component({
  selector: 'app-header',
  imports: [ CommonModule, RouterLink,MatIcon,  MatBadge],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class Header implements OnInit {

  store = inject(recipesStore);
  router = inject(Router);

  ngOnInit() {

    this.store.getListOfCategories()
    this.store.getListOfAreas()
    this.store.getListOfIngredients()
  }

  getMealsByCategory(category:string){
   this.router.navigate(['/category', category]);
}
getMealsByArea(area:string){
  this.router.navigate(['/area', area]);
}

getMealsByIngredient(ingredient:string){
  this.router.navigate(['/ingredient', ingredient]);
}

scrollToAbout() {
  const element = document.getElementById('about-us');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

}
}
