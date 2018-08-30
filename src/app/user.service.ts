import { Injectable, OnInit } from '@angular/core';
import { User } from './models/user';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class UserService implements OnInit {
  users: FirebaseListObservable<any[]>;
  // currentUser: User;
  isLoggedIn: boolean = false;
  currentUserKey: string;
  userNamePair;
  userKeyPair;

  constructor(private database: AngularFireDatabase) {
    this.users = database.list('users');
  }

  ngOnInit() {
    this.users.subscribe(content => {
      this.userNamePair = new Map();
      this.userKeyPair = new Map();
      content.forEach(user => {
        this.userNamePair.set(user.$key, user.username);
        this.userKeyPair.set(user.username, user.$key);
      })
    });
  }

  getUsers() {
    return this.users;
  }

  getUser(userKey: string) {
    return this.database.object('users/'+userKey);
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
    return this.getUser(this.currentUserKey);
  }

}
