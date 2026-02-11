import { Component, inject } from '@angular/core';
import { recipesStore } from '../../../recipes.store';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-area',
  imports: [CommonModule],
  templateUrl: './area.html',
  styleUrl: './area.css',
})
export class Area {

  route = inject(ActivatedRoute);

  store = inject(recipesStore);
  router = inject(Router);
ngOnInit() {

  this.route.paramMap.subscribe(params => {

    const areaName = params.get('name');

    if(areaName){
      this.store.filterMealsByArea(areaName);
    }

  });

}

goToMealDetails(idMeal: string) {
  this.router.navigate(['/recipes', idMeal]);
}
}
