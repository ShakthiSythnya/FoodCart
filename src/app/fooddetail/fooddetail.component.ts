import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fooddetail',
  templateUrl: './fooddetail.component.html',
  styleUrls: ['./fooddetail.component.css']
})
export class FooddetailComponent implements OnInit {

  constructor() { }
starArray:Array<number> = Array(5).fill(0);
  ngOnInit(): void {
  }

}
