export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }
}

export class Recipe {
    constructor(public name: string, public description: string, public imagePath: string, public ingredients: Ingredient[]){}
}