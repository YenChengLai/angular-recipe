import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Pepperoni Pizzadilla', 'Pizza with four cheeses and pepperoni.',
      'https://tinyurl.com/wv7jotx')
  ];

  @Output() recipeEmitted = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  OnSelectedRecipe(recipe: Recipe) {
    this.recipeEmitted.emit(recipe);
  }

}
