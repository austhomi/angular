import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})

export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  recipeId: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute) { }
    
  ngOnInit(): void {

    // Get recipe ID from URL
    this.recipeId = this.route.snapshot.params['id']
    this.route.params.subscribe(
      (params:Params) => {
        this.recipeId = params['id']
        if(this.recipeId) this.selectedRecipe = this.recipeService.getRecipe(this.recipeId)
      }
    )
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.selectedRecipe = recipe
    //   })
  }
}
