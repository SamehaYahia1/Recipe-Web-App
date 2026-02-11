import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { recipesStore } from '../../recipes.store';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-view-recipe-details',
  imports: [CommonModule, MatCheckboxModule],
  templateUrl: './view-recipe-details.html',
  styleUrl: './view-recipe-details.css',
})
export class ViewRecipeDetails implements OnInit {

 route = inject(ActivatedRoute);
 store = inject(recipesStore);

isOpen = signal(true);
meal = this.store.selectedRecipe;



  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('idMeal');

    if(id){
      this.store.getMealById(id);
    }
  }


toggleInstructions(){
  this.isOpen.update(v => !v);
}
extractYoutubeId(url: string): string {
  // works for standard YouTube URL: https://www.youtube.com/watch?v=ID
  const regExp = /v=([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : '';
}
}
