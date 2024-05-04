import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/_models/user.model';
import { SharedDataService } from 'src/app/_services/shared-data.service';
import { UserDataService } from 'src/app/_services/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  isModalOpen = false;
  user={email:'', password:'', rememberMe:'' }

  constructor(private router:Router, private userService:UserDataService, 
    private sharedDataService:SharedDataService) { }

  ngOnInit(): void {
    // Modal is initially closed
    this.isModalOpen = true;
  }

  openModal() {
    // Set the variable to true to open the modal
    this.isModalOpen = true;
  }

  closeModal() {
    // Set the variable to false to close the modal
    this.isModalOpen = false;
    this.router.navigate(['/home']);
  }

  onSubmit(){  
   const user = new User();
   user.email = this.user.email;
   user.password = this.user.password;   
    this.userService.checkLogin(user).subscribe({
      next:(response:any)=>{       
        if(response.token){
          alert(response.message);
        this.sharedDataService.LoggedIn(true);
        this.userService.setToken(response.token);
        //this.sharedDataService.login();
        this.router.navigate(['./flight']);

        }
        
      },
      error:(err:any)=>alert(err)
    })
   
  }

  
}
