import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { User } from '../models/user';
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

  addUser(username: string,password: string)
  {
    let blogs = this.database.list('blogs');
    var newBlog = new Blog();
    newBlog.addPost('test description');
    let blogKey = blogs.push(newBlog).key;
    let newUser = new User(username,password,[],[],blogKey);
    this.users.push(newUser);
  }

}
