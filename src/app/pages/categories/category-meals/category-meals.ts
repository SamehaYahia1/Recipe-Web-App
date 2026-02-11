import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recipesStore } from '../../../recipes.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-meals',
  imports: [CommonModule],
  templateUrl: './category-meals.html',
  styleUrl: './category-meals.css',
})
export class CategoryMeals {

  route = inject(ActivatedRoute);

  store = inject(recipesStore);
  router = inject(Router);

ngOnInit() {

  this.route.paramMap.subscribe(params => {

    const categoryName = params.get('name');

    if(categoryName){
      this.store.filterMealsByCategory(categoryName);
    }

  });

}
  goToMealDetails(idMeal: string) {
    this.router.navigate(['/recipes', idMeal]);
  }



}
