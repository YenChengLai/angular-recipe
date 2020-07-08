import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientChange = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice().sort((pre, curr) => {
      return pre.name.substr(0, 1).toLowerCase().charCodeAt(0) - curr.name.substr(0, 1).toLowerCase().charCodeAt(0);
    });
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChange.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientChange.next(this.ingredients.slice());
  }
}
