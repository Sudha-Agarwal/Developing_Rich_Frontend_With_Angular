import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/_models/product.model';
import { ProductsService } from 'src/app/_services/products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  @Output() productAdded:EventEmitter<Product> =new EventEmitter<Product>(); 
  product:Product;
  productForm: FormGroup;
  categories: string[] = ['mobile', 'laptop', 'furniture', 'Toys'];
  constructor(private productService:ProductsService, private formBuilder: FormBuilder){}
  
  ngOnInit(): void {
    // Initialize the form with form controls and their initial values (if needed)
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required], // Name is required
      description: ['', Validators.required], // Description is required
      category: ['', Validators.required]
    });
  }

  onSubmit(){
    this.product = this.productForm.value;
    console.table(this.productForm.value);
    this.productAdded.emit(this.product);
    
  
    
    //this.showForm = false;
    //this.ngOnInit();
  }
}