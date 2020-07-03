import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Pepperoni Pizzadilla', 'Pizza with four cheeses and pepperoni.',
      'https://tinyurl.com/wv7jotx', [new Ingredient('tomato', 2), new Ingredient('flour', 2)]),
    new Recipe('Pasta', 'One of the most delicious Italian dishes.',
      'https://tinyurl.com/yabnwsow', [new Ingredient('pasta', 1), new Ingredient('tomato', 3)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

}