import { Component, Input } from '@angular/core';
import { Meal } from '../models/meal.model';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-recipes-card',
  imports: [],
  templateUrl: './recipes-card.html',
  styleUrl: './recipes-card.css',
})
export class RecipesCard {

  @Input({required:true}) meal!: Meal;

  constructor(private router:Router){}

  onRecipeClick(){
    this.router.navigate(['/recipes',this.meal.idMeal])

  }
}
