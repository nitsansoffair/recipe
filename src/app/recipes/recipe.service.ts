import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://www.skinnytaste.com/wp-content/uploads/2009/02/turkey-meatloaf-8.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
