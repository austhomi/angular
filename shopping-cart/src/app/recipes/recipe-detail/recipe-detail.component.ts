import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe

  constructor(
    private recipeService: RecipeService,
    private slService: ShoppingListService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipe(this.route.snapshot.params['id'])
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe(params['id'])
      }
    )
  }

  addToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients)
  }
}
