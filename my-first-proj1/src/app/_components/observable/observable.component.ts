import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription, map, tap } from 'rxjs';
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
    /*this.subscription = this.userService.getObservableData().subscribe({
      next:data =>console.log(data),
      error: error=> console.log(error),
      complete:()=> console.log('complete')
    })   ;*/


   
// Creating a BehaviorSubject with an initial value
const behaviorSubject = new BehaviorSubject<number>(0);

// Emitting values to the BehaviorSubject
behaviorSubject.next(1);
behaviorSubject.next(2);

// Subscribing to the BehaviorSubject after emissions
const observer = behaviorSubject.subscribe({
  next: value => {console.log('BehaviorSubject subscriber1 received:', value);
    behaviorSubject.next(value);
  },
  complete: () => console.log('BehaviorSubject subscription1 completed')
});

// Subscribing to the BehaviorSubject after emissions
behaviorSubject.subscribe({
  next: value => console.log('BehaviorSubject subscriber2 received:', value),
  complete: () => console.log('BehaviorSubject subscription2 completed')
});

/*behaviorSubject.pipe(
  tap(value => console.log('Tap operator:', value)),
  map(value => value * 2)
).subscribe({
  next: value => console.log('Subject subscriber received:', value),
  complete: () => console.log('Subject subscription completed')
});*/

// Creating a regular Observable emitting values
const observable = new Observable<number>(observer => {
  observer.next(10);
  observer.next(20);
  observer.complete();
});

// Subscribing to the Observable
observable.subscribe({
  next: value => console.log('Observable subscriber1 received:', value),
  complete: () => console.log('Observable subscription1 completed')
});


observable.subscribe({
  next: value => console.log('Observable subscriber2 received:', value),
  complete: () => console.log('Observable subscription2 completed')
});

// Creating a regular Observable for unicast behavior
   /* const observable = new Observable<number>(observer => {
      observer.next(10);
      observer.next(20);
      observer.complete();
    }).pipe(
      tap(value => console.log('Observable value:', value)),
      map(value => value * 2)
    );*/
  } 
}


