import { EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingrediensChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingrediensChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingrediensChanged.next(this.ingredients.slice());
  }
}
