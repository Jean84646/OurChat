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
  user: User;


=======
  user:User;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  user: User;
>>>>>>> 44a3da4ee38cbab980a2bbd291158897fafe46c0
  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {

    this.user = this.userService.getCurrentUser();
  }
<<<<<<< HEAD

=======
>>>>>>> 44a3da4ee38cbab980a2bbd291158897fafe46c0

  logOut() {
    this.userService.isLoggedIn = false;
    this.userService.currentUser = null;
    this.router.navigate(['']);
  }
}
