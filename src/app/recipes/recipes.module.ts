import { NgModule } from '@angular/core';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipseRoutingModule } from './recipes-routing.module';
import { ShareModule } from '../shared/share.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeStartComponent
  ],
  imports: [
    RouterModule,
    // CommonModule, // BrowserModule can allow components to use directives like ngFor.
                     // But it should only be imported in app.module.ts.
                     // We therefore use CommonModule instead.
                     // It is now imported through ShareModule
    ReactiveFormsModule,
    RecipseRoutingModule,
    ShareModule
  ]
})
export class RecipesModule {

}
