import { Component } from '@angular/core';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user = {email:'', password:''};

  //An object of UserService class would be created and injected (DI)
  constructor(private userService: UserService){}

  onSubmit(){
    alert(this.userService.checkLogin());//calling service method
    //alert(this.user.password)
  }

}
