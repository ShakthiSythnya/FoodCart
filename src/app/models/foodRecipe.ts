import { Tag } from "./tag";

export type FoodRecipe = {
    url:string;
    name: string;
    rating: number;
    isFavorite:boolean;
    cooktime:string;
    price:number;
    tagName:string;
}