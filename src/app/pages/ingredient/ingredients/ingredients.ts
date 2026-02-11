import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recipesStore } from '../../../recipes.store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingredients',
  imports: [CommonModule,
  ],
  templateUrl: './ingredients.html',
  styleUrl: './ingredients.css',
})
export class Ingredients {

    route = inject(ActivatedRoute);

  store = inject(recipesStore);
  router = inject(Router);
ngOnInit() {

  this.route.paramMap.subscribe(params => {

    const Name = params.get('name');

    if(Name){
      this.store.filterMealsByIngredient(Name);
    }

  });

}
goToMealDetails(idMeal: string) {
  this.router.navigate(['/recipes', idMeal]);
}
}
