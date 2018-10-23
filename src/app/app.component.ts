import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  helloChild;
  title = 'LeaveSystemUI';

  msgChild() {
    alert('test');
  }
}
