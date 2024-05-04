import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/_services/user-data.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    check:false
   
  };

  constructor(private userService:UserDataService,private router:Router){}
  onSubmit(){
    this.userService.createNewUser(this.user).subscribe({
      next:(response:any)=>{
        alert(response.message);
      this.router.navigate(['/login'])},
      error:err=>alert(err)
    })


  }
  

}
