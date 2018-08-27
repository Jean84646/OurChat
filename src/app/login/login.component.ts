import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  users: User[];
  isLoggedIn: boolean = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
      this.users = dataLastEmittedFromObserver;
   });
 }
  checkLogin(userName, userPass){
    console.log(this.users);
    for(let i = 0; i < this.users.length; i++) {
      if (this.users[i].username == userName) {
        if (this.users[i].password == userPass) {
          this.isLoggedIn = true;
        }
      }
    }
    if (this.isLoggedIn) {
      // route to home
      alert("Login is good");
    } else {
      alert("Incorrect username/password");
    }
  }

}
