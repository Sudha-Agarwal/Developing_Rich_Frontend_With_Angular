import { Component, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild(LoginComponent) loginModal: LoginComponent;
  isLoggedOut:boolean = true;
  isLoggedIn:boolean = false;

  constructor(private router:Router){}
  logout(){

  }
  openLoginModal() {
    this.router.navigate(['/login']);     
  }

}
