import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
class Service{
  getData(){}
  constructor(){
  }

}
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  //service:Service = new Service();//Dependency
  productId:string | null ='';

  constructor(private route:ActivatedRoute, private router:Router){   
    this.productId = this.route.snapshot.paramMap.get('id');

    //you can make a backend query to fetch more data based on product ID

    //with query params
    this.route.queryParams


  }

  //manual navigation
  navigateToProducts(){
    this.router.navigate(['/products']);
  }
}

//Dependency Injection




