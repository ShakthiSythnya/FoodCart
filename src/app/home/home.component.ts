import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FoodService } from '../services/food.service';
import { FoodRecipe } from '../models/foodRecipe';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foodRecipes!: FoodRecipe[]
  constructor(private foodService:FoodService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    
    this.activatedRoute.params.subscribe(param=>{
      
      console.log(param)
      if(param['searchTerm']){
        this.getAllFoodRecipesBySearchTerm(param['searchTerm']).subscribe({
          next:(val)=>{
            this.foodRecipes = val;
            },
        });    
      
    }else if(param['tagName']){
      
      this.getAllFoodRecipesByTag(param['tagName']).subscribe({
        next: (val)=>{
          this.foodRecipes = val;

        }
      })
    }
    else
    {
      this.getAllFoodRecipes().subscribe({
        next:(val)=>{
          this.foodRecipes = val;
          },
      });    
    }
    });
  }

  getAllFoodRecipesByTag(tagName:string):Observable<FoodRecipe[]>
  {
    return this.foodService.getAllByTags(tagName).pipe(
      map((val: FoodRecipe[])=>{
        return val;
      })
    )
  }

  
  getAllFoodRecipesBySearchTerm(searchTerm:string):Observable<FoodRecipe[]>
  {
    return this.foodService.getAllBySearchTerm(searchTerm).pipe(
      map((val: FoodRecipe[])=>{
        return val;
      })
    )
  }

  getAllFoodRecipes():Observable<FoodRecipe[]>
  {
    return this.foodService.getAll().pipe(
      map((val: FoodRecipe[])=>{
       return val; })
    );
  }

  getArray(rating: number)
  {
    return Array(rating).fill(0);
  }

}
