import { Component } from '@angular/core';
import { UserService } from './_services/user.service';
import { SharedDataService } from './_services/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-proj1';
  isLoggedOut!:boolean;
  isLoggedIn!:boolean;

  constructor(private userService:UserService, private sharedDataService:SharedDataService){
    this.userService.getObservableData().subscribe({
      next:data => {
        console.log("App component" + data)
      }
        
      
    })

    this.sharedDataService.isLoggedIn.subscribe(dataSubjectLogin => {
      this.isLoggedIn = dataSubjectLogin;
      this.isLoggedOut = !dataSubjectLogin;
    })

  }

  logout(){
    alert("you will logged out");
    this.sharedDataService.loggedOut();
  }
}

