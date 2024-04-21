import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent {
  constructor(private userService: UserService){}

  RegisterationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, ]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, 
      Validators.pattern('^[a-zA-Z0-9\.-]+@[a-zA-Z\.-]+\.[a-zA-Z]{2,4}$'), 
      emailDomainValidator]),//calling custom validator function
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  get formControls(){
    return this.RegisterationForm.controls;
  }

  submit(){
    //alert(this.userService.checkLogin())
    console.table(this.RegisterationForm.value);
  }

}
//custom validator
export function emailDomainValidator(control:FormControl) : ValidationErrors | null{
  let email = control.value;
  if(email && email.indexOf("@")!=-1){
    let[_, domain] = email.split("@");

    if(domain !== "gmail.com"){
      return{
        emailDomain:{
          parseDomain:domain
        }
      }
    }
  }
  return null;


}
