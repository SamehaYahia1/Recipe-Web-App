
export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strYoutube: string;

  ingredients?: Ingredient[];
  strIngredient: string;
  strDescription: string;
  strType: string;
  strThumb: string;

}
export interface Ingredient {
  name: string;
  measure: string;
}

export interface MealResponse {
  meals: Meal[];
}
