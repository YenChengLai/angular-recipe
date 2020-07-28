import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {

  constructor(private dataStorageSvc: DataStorageService, private recipeSvc: RecipeService) { }

  // force the router to wait for initial data before it navigates
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeSvc.getRecipes();
    if (!recipes.length) {
      return this.dataStorageSvc.fetchRecipes();
    } else {
      return recipes;
    }
  }

}
