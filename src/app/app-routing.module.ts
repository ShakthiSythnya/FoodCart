import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooddetailComponent } from './fooddetail/fooddetail.component';
import { CartComponent } from './cart/cart.component';

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
    path:'fooddetail/:id',component:FooddetailComponent
  },
  {
    path:'cart', component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
