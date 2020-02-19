import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

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

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingrediensChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingrediensChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingrediensChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingrediensChanged.next(this.ingredients.slice());
  }
}
