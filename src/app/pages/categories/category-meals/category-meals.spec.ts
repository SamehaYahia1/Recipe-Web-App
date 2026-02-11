import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryMeals } from './category-meals';

describe('CategoryMeals', () => {
  let component: CategoryMeals;
  let fixture: ComponentFixture<CategoryMeals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryMeals]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryMeals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
