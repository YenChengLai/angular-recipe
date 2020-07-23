import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe('Pepperoni Pizzadilla', 'Pizza with four cheeses and pepperoni.',
  //     'https://tinyurl.com/wv7jotx', [new Ingredient('tomato', 2), new Ingredient('flour', 2)]),
  //   new Recipe('Pasta', 'One of the most delicious Italian dishes.',
  //     'https://tinyurl.com/yabnwsow', [new Ingredient('pasta', 1), new Ingredient('tomato', 3)])
  // ];

  private recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}
