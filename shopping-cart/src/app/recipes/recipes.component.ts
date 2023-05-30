import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  onRecipeSelected(recipe: Recipe) {
    console.log('recipe selected' + recipe.name);
    this.selectedRecipe = recipe;
  }

}
