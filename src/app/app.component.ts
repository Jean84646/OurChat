import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // currentUser: User;
  currentUser: User = new User("testUsername", "1234", ["0"],["0"],"0");

  updateCurrentUser(newUser){
    this.currentUser = newUser;
  }

  title = 'OurChat';
}
