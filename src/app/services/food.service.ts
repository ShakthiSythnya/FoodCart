import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FoodRecipe } from '../models/foodRecipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private httpClient: HttpClient) { }

  getAll():Observable<FoodRecipe[]>
  {
    return this.httpClient.get<FoodRecipe[]>("http://localhost:3000/foodRecipes");

  }
}
