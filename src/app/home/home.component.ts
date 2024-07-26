import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FoodService } from '../services/food.service';
import { FoodRecipe } from '../models/foodRecipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foodRecipes!: FoodRecipe[]
  constructor(private foodService:FoodService) { }

  ngOnInit(): void {
    this.getAllFoodRecipes()
  }

  getAllFoodRecipes()
  {
    this.foodService.getAll().subscribe({
      next:(val:FoodRecipe[])=>{
        if(val !== null && val.length > 0 )
          {
            this.foodRecipes = val;
            console.log(this.foodRecipes);
          }          
      }
    })
  }

}
