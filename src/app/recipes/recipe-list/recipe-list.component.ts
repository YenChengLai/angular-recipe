import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test', 'This is merely a test.',
      'https://cookieandkate.com/images/2019/02/best-shakshuka-recipe-3.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
