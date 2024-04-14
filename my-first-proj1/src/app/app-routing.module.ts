import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from './_components/products-list/products-list.component';
import { BindingsComponent } from './_components/bindings/bindings.component';
import { ProductDetailComponent } from './_components/product-detail/product-detail.component';

//Defining the routing paths
const routes: Routes = [
  {path:'bindings', component:BindingsComponent},
  {path:'products', component:ProductsListComponent},
  {path: 'product-detail/:id',component:ProductDetailComponent}, //parameterized routing
  {path: 'product-detail',component:ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], //configuring the navigation for the application
  exports: [RouterModule]
})
export class AppRoutingModule { }
