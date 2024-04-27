import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  categories:string[]=['mobile', 'laptop','furniture'];
  productForm:FormGroup;
  product:Product;

  constructor(){
    this.productForm = new FormGroup({
      name:new FormControl('', [Validators.required]),
      description:new FormControl('', [Validators.required]),
      category:new FormControl('', [Validators.required])
    })

  }

  onSubmit(){
    this.product = this.productForm.value;
    
  }




}
