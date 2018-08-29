import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../services/user.service';
import { ContactPipe } from '../contact.pipe';
import { User } from '../models/user';

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

  constructor(private userService: UserService) { }
  ngOnInit()
  {
    let tempContacts = [];
    this.user = this.userService.getCurrentUser();
    this.userService.getUsers().subscribe(userList =>
      {
      this.users = userList;
      this.user = this.userService.getCurrentUser();

      this.contacts = this.user.contacts;
      this.user.contacts.forEach(function(contactKey)
      {
        userList.forEach(function(user){
          if(user.$key === contactKey)
          {
            tempContacts.push(user.username);
          }
        });
      });
    });
    this.contacts = tempContacts;
  }
}
