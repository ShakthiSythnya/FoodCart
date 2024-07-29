import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodRecipe } from '../models/foodRecipe';
import { filter, map, Observable } from 'rxjs';
import { Tag } from '../models/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<FoodRecipe[]>
  {
    return this.httpClient.get<FoodRecipe[]>("http://localhost:3000/foodRecipes");
  }

  getAllByTags(tagName: string = 'all'):Observable<FoodRecipe[]>{
    if(tagName === 'all')
    {
      return this.getAll();
    }
    else
    {
      return this.getAll().pipe(
       map((val:FoodRecipe[])=>{
        return val.filter(x=>x.tagName.includes(tagName));
       })
      )
    }


  }
  getAllBySearchTerm(searchTerm: string = ''):Observable<FoodRecipe[]>{
    if(searchTerm === '')
    {
      return this.getAll();
    }
    else
    {
      return this.getAll().pipe(
       map((val:FoodRecipe[])=>{
        return val.filter(x=>x.name.includes(searchTerm));
       })
      )
    }


  }
  getTags():Observable<Tag[]>{
    
      return this.httpClient.get<Tag[]>("http://localhost:3000/tags")
    
  }
}
