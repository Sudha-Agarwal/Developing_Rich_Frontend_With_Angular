import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy{
  constructor(private userService:UserService){}
  subscription!:Subscription;
  ngOnDestroy(): void {
    console.log('object destroyed')
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    console.log('object created')
    this.subscription = this.userService.getObservableData().subscribe({
      next:data =>console.log(data),
      error: error=> console.log(error),
      complete:()=> console.log('complete')
    })   
  } 

}
