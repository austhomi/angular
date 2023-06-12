import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();

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
        this.ingredientsChanged.next(this.getIngredients())
    }
    
    addIngredients(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
        this.ingredientsChanged.next(this.getIngredients())
    }

    updateIngredient(id: number, recipe: Ingredient) {
        this.ingredients[id] = recipe
        this.ingredientsChanged.next(this.getIngredients())
    }

    deleteRecipe(id: number) {
        this.ingredients.splice(id, 1)
        this.ingredientsChanged.next(this.getIngredients())
    }
}