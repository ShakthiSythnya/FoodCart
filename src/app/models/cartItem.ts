import { FoodRecipe } from "./foodRecipe";

export class cartItem{
    
    constructor(food:FoodRecipe)
    {
        this.food = food;
        this.price;
    }

    food:FoodRecipe;
    quantity:number = 1;
    get price():number{
        return this.food.price * this.quantity;
    }
}