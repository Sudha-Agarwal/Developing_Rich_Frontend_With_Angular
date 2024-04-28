import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { ProductsService } from 'src/app/_services/products.service';
declare var bootstrap:any;

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

  products:Product[]=[];
  showEditProduct:boolean=false;
  selectedProduct!:Product;
  errorMessage:string;
  showAddProduct:boolean = false;
  modalEditElement:HTMLElement;
  modalEdit:any;

  modalAddElement:HTMLElement;
  modalAdd:any;

  constructor(private productService:ProductsService){}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next:data=>{this.products = data},
      error:error=> {
        alert(error.error.message);
        console.log(error);
        this.errorMessage = error.error.message
        //redirect to some error page
      },
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
    this.selectedProduct = Object.assign({},product);
    this.modalEditElement = document.getElementById('editProductModal');
    this.modalEdit = new bootstrap.Modal(this.modalEditElement);
    this.modalEdit.show();


  }

  update(product:Product){
    this.showEditProduct = false;
    //var target = this.products.find(e=> e.id===product.id);
    //Object.assign(target, product);
    this.productService.updateProduct(product).subscribe({
      next:data=>{
        alert(data.message);
        this.ngOnInit();
      },
      error:error=>alert(error.message)
    })
    this.modalEdit.hide();

  }

  cancelUpdate(){
    this.showEditProduct = false;
    this.modalEdit.hide();
  }

  addNewProduct(){
    this.showAddProduct = true;
    this.modalAddElement = document.getElementById('addProductModal');
    this.modalAdd = new bootstrap.Modal(this.modalAddElement);
    this.modalAdd.show();
    

  }

  added(product:Product){
    this.productService.addProduct(product).subscribe({
      next:(data:any)=>{
       
          alert("product added");
          this.ngOnInit();
      
      },
      error:error=>alert(error)
    });
    this.modalAdd.hide();
  }

  deleteProduct(id:number){
    if(confirm('Are you sure you want to delete this product')){
      this.productService.deleteProduct(id).subscribe({
        next:data=> {
          alert(data.message);
          this.ngOnInit();
        }
      })
    }
    
  }

}
