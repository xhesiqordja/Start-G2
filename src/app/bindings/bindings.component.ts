import { Component } from '@angular/core';


@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent {
  inputValue: string = '';
  submitted: boolean = false;

  handleClick() {
    this.submitted = true;
    this.inputValue = '';
  }

}
