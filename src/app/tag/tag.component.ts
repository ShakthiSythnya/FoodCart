import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
   this._foodService.getTags().subscribe(
      (val)=>{
        this.tags = val;
      }
    )
  }

}
