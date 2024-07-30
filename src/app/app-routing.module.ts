import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooddetailComponent } from './fooddetail/fooddetail.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'search/:searchTerm',component:HomeComponent
  },
  {
    path:'tag/:tagName',component:HomeComponent
  },
  {
    path:'fooddetail/:food',component:FooddetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
