import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },

  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.Home)
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us').then(m => m.AboutUs)
  },
  {
    path:'wishlist',
    loadComponent: () => import('./pages/wishlist/wishlist').then(m => m.Wishlist)
  },
  {
    path: 'recipes/:idMeal',
    loadComponent: () => import('./pages/view-recipe-details/view-recipe-details').then(m => m.ViewRecipeDetails)
  },
  {
    path: 'category/:name',
    loadComponent: () => import('./pages/categories/category-meals/category-meals').then(m => m.CategoryMeals)
  },
  {
    path: 'area/:name',
    loadComponent: () => import('./pages/Area/area/area').then(m => m.Area)
  },
  {
    path: 'ingredient/:name',
    loadComponent: () => import('./pages/ingredient/ingredients/ingredients').then(m => m.Ingredients)
  }

];
RouterModule.forRoot(routes, {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
})
