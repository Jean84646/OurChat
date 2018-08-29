import { Injectable } from '@angular/core';
import { User } from './models/user';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as Rx from "rxjs";

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  currentUser: User;
  // currentUser = this.user.asObservable();
  // isLoggedIn: boolean = false;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUsers() {
    return this.users;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
  }

}
