import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/user';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {
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


  logOut() {
    // this.userService.isLoggedIn = false;
    // this.userService.currentUser = null;
    this.router.navigate(['']);
  }
}
