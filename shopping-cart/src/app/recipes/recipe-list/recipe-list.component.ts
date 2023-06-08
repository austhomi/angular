import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{

  recipes: Recipe[] = []

  // onRecipeSelected(recipe: Recipe) {
  //   this.selectedRecipe.emit(recipe);
  // }

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router){}
  
  ngOnInit(): void {
      this.recipes = this.recipeService.getRecipes()
  }

  redirectToCreatePage(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
}
