import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchTerm :string = '';
  constructor(private _activatedRoute:ActivatedRoute, private _foodService: FoodService, private _router: Router) { }

  ngOnInit(): void {

    this._activatedRoute.params.subscribe(param =>{
      if(param['searchTerm']){
        this.searchTerm = param['searchTerm'];
        // this._foodService.getAll().subscribe({
        //   next:(val)=>{
        //     return val.filter(x=> x.name.includes(param['searchTerm']));
        //   }
        // })

      }
      });

      
  }

  search(){
    console.log(this.searchTerm);
    this._router.navigateByUrl('search/' + this.searchTerm);
  }


}
