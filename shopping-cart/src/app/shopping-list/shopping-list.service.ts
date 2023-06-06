import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Orange', 20),
        new Ingredient('Orange', 30)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients())
    }
    
    addIngredients(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.emit(this.getIngredients())
    }

    updateIngredient(id: number, recipe: Ingredient) {
        this.ingredients[id] = recipe
        this.ingredientsChanged.emit(this.getIngredients())
    }

    deleteRecipe(id: number) {
        this.ingredients.splice(id, 1)
        this.ingredientsChanged.emit(this.getIngredients())
    }
}