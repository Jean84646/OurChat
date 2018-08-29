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

  //to return an array of users that are contacts of the given user.
  getContacts(userKey: number){
    var contacts = [];
    var users = [];
    contacts.push(this.users[userKey])

    for(let i = 0; i <= 1; i ++){
      if(contacts[i] === this.users[i]){
        users.push(this.users)
      }
    }
    return users;
  }

  getCurrentUser() {
    return this.currentUser;
  }

}
