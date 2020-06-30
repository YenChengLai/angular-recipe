import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pepperoni Pizzadilla', 'Pizza with four cheeses and pepperoni.',
      'https://tinyurl.com/wv7jotx')
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }

}
