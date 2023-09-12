import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-course';
  inputText = '';
  checkInput = false;
  serverCreated = false;

  onChange(event: Event) {
    this.inputText = (<HTMLInputElement>event?.target).value;
  }

  onCreateServer() {
    this.serverCreated = true;
  }

  clearInput() {
    this.inputText = '';
  }
}
