import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../services/user.service';
import { ContactPipe } from '../contact.pipe';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['../app.component.css','./contact.component.css']
})
export class ContactComponent implements OnInit
{
  users;
  user: User;
  contacts: string[];
  show: boolean = false;

  constructor(private userService: UserService, private router: Router) { }
  ngOnInit()
  {
    this.contacts = this.userService.getContacts();
    console.log(this.contacts);
  }
  logOut() {
    this.userService.isLoggedIn = false;
    this.userService.currentUser = null;
    this.router.navigate(['']);
  }
  showChatButton(){
    this.show = !this.show;
  }
}
