import { Component, inject, OnInit } from '@angular/core';
import { recipesStore } from '../../recipes.store';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  imports: [CommonModule],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories implements OnInit {

  store = inject(recipesStore);
  router = inject(Router);

  ngOnInit() {
    this.store.getCategories();
  }
  selectCategory(categoryName: string) {

    this.router.navigate(['/category', categoryName]);

  }



}
