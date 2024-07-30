import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../models/tag';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  constructor(private _foodService: FoodService) { }

  tags:Tag[]=[];
  @Input()
  foodTags: Tag[]=[];

  ngOnInit(): void {
   if(!(this.foodTags.length >0))
   {
    this._foodService.getTags().subscribe(
      (val)=>{
        this.tags = val;
      }
    )
   }
}

}
