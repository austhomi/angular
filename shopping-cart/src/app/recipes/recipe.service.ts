import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>()
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe 1',
            'This is simply a test #1',
            'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
            [{ name: 'Meat', amount: 1 },new Ingredient('Chilli', 20)]),
        new Recipe(
            'A Test Recipe 2',
            'This is simply a test #2',
            'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
            [{ name: 'Apple', amount: 5 }]),
        new Recipe(
            'A Test Recipe 3',
            'This is simply a test #3',
            'https://www.maxpixel.net/static/photo/1x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
            [{ name: 'Egg', amount: 100 }]),
    ];

    constructor(private slService: ShoppingListService) { }


    getRecipe(id:number) {
        return this.recipes.slice()[id]
    }

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

    addToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }
}