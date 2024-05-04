import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { SignUpComponent } from './_components/sign-up/sign-up.component';
import { HomeComponent } from './_components/home/home.component';
import { FlightsComponent } from './_components/flights/flights.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'flight', component:FlightsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
