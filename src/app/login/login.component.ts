import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: User[];
  userNamePasswordPair;
  userKeyPair;


  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(content => {
      this.users = content;
      //console.log(this.users);
      this.userNamePasswordPair = new Map();
      this.userKeyPair = new Map();
      content.forEach(user => {
        this.userNamePasswordPair.set(user.username, user.password);
        this.userKeyPair.set(user.username, user.$key);
      })
   });
 }
  checkLogin(userName, userPass){
    // for(let i = 0; i < this.users.length; i++) {
    //   if (this.users[i].username == userName) {
    //     if (this.users[i].password == userPass) {
    //       this.userService.isLoggedIn = true;
    //       this.userService.currentUser = this.users[i];
    //     }
    //   }
    // }
    if (this.userNamePasswordPair.get(userName) === userPass) {
      this.userService.isLoggedIn = true;
      this.userService.currentUserKey = this.userKeyPair.get(userName);
    }
    if (this.userService.isLoggedIn) {
      this.router.navigate(['home']);
    } else {
      alert("Incorrect username/password");
    }
  }

  signUp() {
    this.router.navigate(['signup']);
  }

}
