import { patchState, signalStore, withComputed, withMethods, withState } from "@ngrx/signals";
import { Ingredient, Meal } from "./models/meal.model";
import {produce} from 'immer';
import { computed, inject } from "@angular/core";
import { Categories } from "./models/categories.model";
import { MealService } from "./services/meal-service";
import { Toaster } from "./services/toaster";

export type RecipeState = {
  recipes: Meal[];
  mealsToShow: number;
  loading:boolean;
  categories:Categories[]
  wishList:Meal[]
  selectedRecipe:Meal | null
  selectedCategory: Meal[]
  listOfCategories: Meal[]
  listOfAreas: Meal[],
  selectedArea: Meal[],
  listOfIngredients: Meal[],
  selectedIngredient: Meal[]
}
function extractIngredients(meal: any): Ingredient[] {

  const ingredients: Ingredient[] = []; //declare empty array so we can fill it

  for(let i = 1; i <= 20; i++){

    const name = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if(name && name.trim()){
      ingredients.push({
        name,
        measure: measure ?? ''
      });
    }
  }

  return ingredients;
}

export const recipesStore = signalStore(
  {
    providedIn:'root',
  },
  withState<RecipeState>({
    recipes: [],
    mealsToShow: 16,
    categories:[],
    loading:false,
    wishList:[] as Meal[],
    selectedRecipe: null,
    selectedCategory:[],
    listOfCategories:[],
    listOfAreas:[],
    selectedArea:[],
    listOfIngredients:[],
    selectedIngredient:[],
  }),
    withComputed((store) => ({

    visibleMeals: computed(() =>
      store.recipes().slice(0, store.mealsToShow())
    ),

    hasMoreMeals: computed(() =>
      store.recipes().length > store.mealsToShow()
  ),
    wishListCount:computed(() => store.wishList().length),


  })),

    withMethods((store, mealService = inject(MealService),toaster=inject(Toaster)) => ({

      searchMeals(term: string) {

      if (!term.trim()) return;

      patchState(store, { loading: true });

      mealService.searchMealByName(term)
        .subscribe({
          next: (res) => {

            patchState(store, {
              recipes: res.meals ?? [],
              mealsToShow: 16,
              loading: false
            });

          },
          error: () => {
            patchState(store, { loading: false });
          }
        });
    },
    getCategories(){
      mealService.getCategories().subscribe({
        next:(res )=>{
          patchState(store,{categories:res.categories })
        },
        error:(err)=>{
          console.log(err)
        }
      })
    },

    getListOfCategories(){
      mealService.getSpecificCategory().subscribe({
        next:(res )=>{
          patchState(store,{listOfCategories:res.meals})
        },
        error:(err)=>{
          console.log(err)
        }
      })

    },
    getListOfAreas(){
      mealService.getSpecificArea().subscribe({
        next:(res )=>{
          patchState(store,{listOfAreas:res.meals})
        },
        error:(err)=>{
          console.log(err)
        }
      })
    },

    getListOfIngredients(){
      mealService.getSpecificIngredient().subscribe({
        next:(res )=>{
          patchState(store,{listOfIngredients:res.meals})
        },
        error:(err)=>{
          console.log(err)
        }
      })
    },

//     getMealById(id:string){
//       mealService.getMealById(id).subscribe({
//         next:(res)=>{
//         patchState(store,{
//   selectedRecipe: res.meals?.[0] ?? null
// })
//         },
//         error:(err)=>{
//           console.log(err)
//         }
//       })
//     },
getMealById(id:string){
  mealService.getMealById(id).subscribe({
    next:(res)=>{

      const meal = res.meals?.[0];

      if(!meal) return;

      patchState(store,{
        selectedRecipe:{
          ...meal,
          ingredients: extractIngredients(meal)
        }
      })
    }
  })
},
filterMealsByCategory(categoryName: string) {
  mealService.filterByCategory(categoryName).subscribe({
    next: (res) => {
      patchState(store, {
        selectedCategory: res.meals ?? [],
      });
    },
    error: (err) => {
      console.log(err);
    }
  })
},
filterMealsByArea(areaName: string) {
  mealService.filterByArea(areaName).subscribe({
    next: (res) => {
      patchState(store, {
        selectedArea: res.meals ?? [],
      });
    },
    error: (err) => {
      console.log(err);
    }
  })
},
filterMealsByIngredient(ingredientName: string) {
  mealService.filterByIngredient(ingredientName).subscribe({
    next: (res) => {
      patchState(store, {
        selectedIngredient: res.meals ?? [],
      });
    },
    error: (err) => {
      console.log(err);
    }
  })
},
    viewMore() {
      patchState(store, {
        mealsToShow: store.mealsToShow() + 8
      });
    },

  addToWishList(meal: Meal) {
  const updated = produce(store.wishList(), draft => {
    const exists = draft.some(m => m.idMeal === meal.idMeal);
    if (!exists) {
      draft.push(meal);
      toaster.success('Recipe added to wishlist');
    }
  });

  patchState(store, { wishList: updated });
},
removeFromWishList(meal: Meal) {

  patchState(store, {
    wishList: store.wishList()
      .filter(m => m.idMeal !== meal.idMeal)
  });

  toaster.success('Recipe removed from wishlist');
},
clearWishList() {
  patchState(store, { wishList: [] });
}

})),
);

