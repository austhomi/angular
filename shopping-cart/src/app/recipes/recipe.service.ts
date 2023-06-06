import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe 1', 'This is simply a test #1', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg', [{ name: 'Meat', amount: 1 }]),
        new Recipe('A Test Recipe 2', 'This is simply a test #2', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg', [{ name: 'Apple', amount: 5 }]),
        new Recipe('A Test Recipe 3', 'This is simply a test #3', 'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg', [{ name: 'Egg', amount: 100 }]),
    ];

    getRecipes() {
        return this.recipes.slice()
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
    }

    updateRecipe(id: number, recipe: Recipe) {
        this.recipes[id] = recipe
    }

    deleteRecipe(id: number) {
        this.recipes.splice(id, 1)
    }
}