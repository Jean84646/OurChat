import { Injectable } from '@angular/core';
import { User } from './models/user';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as Rx from "rxjs";

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  currentUserIndex = new Rx.BehaviorSubject('');
  // currentUser = this.user.asObservable();
  // isLoggedIn: boolean = false;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUsers() {
    return this.users;
  }

  // setCurrentUser(user) {
  //   this.user.next(user);
  // }
}
