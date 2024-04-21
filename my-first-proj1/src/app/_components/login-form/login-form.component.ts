import { Component } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { SharedDataService } from 'src/app/_services/shared-data.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user = {email:'', password:''};

  //An object of UserService class would be created and injected (DI)
  constructor(private userService: UserService,
    private sharedService:SharedDataService
  ){}

  onSubmit(){
    //alert(this.userService.checkLogin());//calling service method
    //alert(this.user.password)
    this.userService.checkLogin(this.user).subscribe({
      next:data=>{alert(data.message);
        sessionStorage.setItem('isLoggedIn', "true");
        this.sharedService.loggedIn();

      },
      error:error=> alert('error'),
      complete:()=> console.log('complete')
    })
  }

}
