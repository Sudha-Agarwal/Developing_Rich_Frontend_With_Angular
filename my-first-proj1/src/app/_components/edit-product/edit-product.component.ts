import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  @Input('product')product:Product;
  @Output() productChange:EventEmitter<Product> = new EventEmitter<Product>();
  @Output() cancelUpdate:EventEmitter<void> = new EventEmitter<void>();

  update(){
    this.productChange.emit(this.product);
  }

  onCancelUpdate(){
    this.cancelUpdate.emit();

  }

}
