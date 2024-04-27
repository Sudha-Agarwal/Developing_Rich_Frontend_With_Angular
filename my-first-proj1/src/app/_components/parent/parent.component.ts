import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  parentMessage = "Message from parent component";

  onMessageReceived(message:string){
    alert("parent component" + message);
  }


}
