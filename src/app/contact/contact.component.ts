import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../services/user.service';
import { ContactPipe } from '../contact.pipe';
import { User } from '../models/user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  users;
  user: User;
  contacts;
  constructor(private userService: UserService) { }

  ngOnInit() {
     this.userService.getUsers().subscribe(dataLastEmitted => {
        this.users = dataLastEmitted;
        this.user = this.userService.getCurrentUser();
        this.contacts = this.user.contacts;
        for(let i = 0; i < this.user.contacts.length; i++) {
          this.contacts[i] = this.users[parseInt(this.user.contacts[i])].username;
        }
    });

  }
//
// console.log(this.contacts);
}
