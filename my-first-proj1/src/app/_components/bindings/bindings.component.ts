import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit{
  ngOnInit(): void {
    
  }
  message:string = "Hello World!!";
  isValid:boolean = true;
  buttonDisabled:boolean = true;
  isActive:boolean = true;
  //isHighlighted:boolean = true;
  isBold:boolean = false;
   
imgPath = "../../../assets/download2.png";

isButtonDisabled(){
  
  return this.buttonDisabled;
}

buttonClicked(){
  alert('button clicked')
}

hasError(){
  return true;
}

isHighlighted(){
  return false;
}

getStyle(){
  return {
    'font-size':'20px',
    'color' : 'purple'
  }
}
  
  
  

  
}
