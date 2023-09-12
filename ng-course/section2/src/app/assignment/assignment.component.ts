import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentComponent {
  show = false;
  arr: any = []

  onClick() {
    this.show = !this.show;
    this.arr.push(this.arr.length + 1)
  }
}
