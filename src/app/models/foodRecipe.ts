import { Tag } from "./tag";

export type FoodRecipe = {
    id: number;
    url:string;
    name: string;
    rating: number;
    isFavorite:boolean;
    cooktime:string;
    price:number;
    tagName:Tag[];
}