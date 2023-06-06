import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe

  constructor(private recipeService: RecipeService, private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients)
  }
}
