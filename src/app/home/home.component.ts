import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD
  users: User[];
  @Input() user: User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(dataLastEmittedFromObserver => {
      this.users = dataLastEmittedFromObserver;
      // this.user = this.users[parseInt(this.userService.currentUserIndex.value)];
      console.log(this.user);
      // console.log(this.userService.currentUserIndex.value);
   });
 }

=======
  user: User;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.user = this.userService.getCurrentUser();
  }
>>>>>>> 0025d26d64338e0b6372644297284641ccec4cf5

  logOut() {
    // this.userService.isLoggedIn = false;
    // this.userService.currentUser = null;
    this.router.navigate(['']);
  }
}
