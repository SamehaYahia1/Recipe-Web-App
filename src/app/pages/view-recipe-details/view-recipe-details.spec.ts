import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRecipeDetails } from './view-recipe-details';

describe('ViewRecipeDetails', () => {
  let component: ViewRecipeDetails;
  let fixture: ComponentFixture<ViewRecipeDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewRecipeDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRecipeDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
