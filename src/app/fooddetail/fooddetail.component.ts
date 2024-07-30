import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../services/food.service';
import { filter } from 'rxjs';
import { FoodRecipe } from '../models/foodRecipe';

@Component({
  selector: 'app-fooddetail',
  templateUrl: './fooddetail.component.html',
  styleUrls: ['./fooddetail.component.css']
})
export class FooddetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute, private _foodService: FoodService) { }
  
  starArray:Array<number> = Array(5).fill(0);
  food!:FoodRecipe;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((param)=>{
      if(param['id'])
      {
        this._foodService.getAll().subscribe((x)=>{
          this.food = x.filter(y=>y.id == param['id'])[0];
          this.starArray = Array(this.food.rating).fill(0);
          console.log(this.food);
        })

      }
    })
  }

}
