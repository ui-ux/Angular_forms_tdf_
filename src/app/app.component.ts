import { Component } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  languages = ['C++', 'C', 'JS', 'TS'];
  isSelect = true;
  userModel = new User(
    'TOM',
    'user@com.ua',
    1234567898,
    'default',
    'radio-value 1',
    true
    );

  validateSelect(value) {
    if (value === 'default'){
      this.isSelect = true;
    }
    else {
      this.isSelect = false;
    }
  }
}
