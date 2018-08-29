import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css','./home.component.css']
})
export class HomeComponent implements OnInit {
  users: User[];
  user;


  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {

    this.user = this.userService.getCurrentUser();
    // console.log(this.user.$key);
  }


  logOut() {
    this.userService.isLoggedIn = false;
    this.userService.currentUser = null;
    this.router.navigate(['']);
  }
}
