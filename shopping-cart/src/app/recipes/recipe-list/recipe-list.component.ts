import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test #1', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',[{name: 'Meat', amount: 1}]),
    new Recipe('A Test Recipe 2', 'This is simply a test #2', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',[{name: 'Apple', amount: 5}]),
  ];

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
