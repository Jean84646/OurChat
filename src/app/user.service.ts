import { Injectable } from '@angular/core';
import { User } from './models/user';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class UserService {
  users: FirebaseListObservable<any[]>;
  currentUser: User;
  isLoggedIn: boolean = false;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  getUsers() {
    return this.users;
  }

  getCurrentUser() {
    return this.currentUser;
  }

}
