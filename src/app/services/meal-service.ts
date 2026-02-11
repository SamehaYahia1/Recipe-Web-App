import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriesResponse } from '../models/categories.model';
import { Ingredient, MealResponse } from '../models/meal.model';

@Injectable({
  providedIn: 'root',
})
export class MealService {

  http = inject(HttpClient);
  baseUrl = "https://www.themealdb.com/api/json/v1/1";
  categoryUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";
  onlyCategory = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";
  onlyArea = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";
  onlyIngredient = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

  searchMealByName(name: string): Observable<MealResponse> {
    return this.http.get<MealResponse>(
      `${this.baseUrl}/search.php?s=${name}`
    );
  }
  getCategories(){
    return this.http.get<CategoriesResponse>(this.categoryUrl);
  }

  getMealById(id:string){
    return this.http.get<MealResponse>(`${this.baseUrl}/lookup.php?i=${id}`);
  }

filterByCategory(categoryName: string) {
  return this.http.get<MealResponse>(
    `${this.baseUrl}/filter.php?c=${categoryName}`
  );
}
filterByArea(areaName: string) {
  return this.http.get<MealResponse>(
    `${this.baseUrl}/filter.php?a=${areaName}`
  );
}
filterByIngredient(ingredientName: string) {
  return this.http.get<MealResponse>(
    `${this.baseUrl}/filter.php?i=${ingredientName}`
  );
}
getSpecificCategory() {
  return this.http.get<MealResponse>( this.onlyCategory);
}
getSpecificArea() {
  return this.http.get<MealResponse>( this.onlyArea);
}
getSpecificIngredient() {
  return this.http.get<MealResponse>( this.onlyIngredient);
}
}
