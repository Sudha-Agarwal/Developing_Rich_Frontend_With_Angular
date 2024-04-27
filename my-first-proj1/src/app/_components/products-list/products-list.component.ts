import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductsService } from 'src/app/_services/products.service';

//Model class
/*class Product{
  id!:number;
  name!:string;
  description!:string;
  visible!:boolean;
  stock!:number;
}*/

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  shortDesc:string = "Click to see more Click to see more Click to see more"

  products!:Product[];
  showEditProduct:boolean=false;
  selectedProduct!:Product;

  constructor(private productService:ProductsService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next:data=>this.products = data,
      error:error=> console.log(error),
      complete:()=> console.log('complete')
    })
  }

  //JSON data
  /*products:Product[] = [
    {id:1, name:'Product1',description:'Description1', visible:true, stock:10},
    {id:2, name:'Product2',description:'Description2', visible:true, stock:0}   
    
  ];*/

  isVisible:boolean = false;

  isProductInStock(product:Product){
    return product.stock > 0;
  }

  showDetails(product:Product){
    this.showEditProduct = true;
    this.selectedProduct = Object.assign({},product)


  }

  update(product:Product){
    this.showEditProduct = false;
    var target = this.products.find(e=> e.id===product.id);
    Object.assign(target, product);


  }

  cancelUpdate(){
    this.showEditProduct = false;
  }

}
