import { Component } from '@angular/core';

//Model class
class Product{
  id!:number;
  name!:string;
  description!:string;
  visible!:boolean;
  stock!:number;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

  //JSON data
  products:Product[] = [
    {id:1, name:'Product1',description:'Description1', visible:true, stock:10},
    {id:2, name:'Product2',description:'Description2', visible:true, stock:0}   
    
  ];

  isVisible:boolean = false;

  isProductInStock(product:Product){
    return product.stock > 0;
  }

}
