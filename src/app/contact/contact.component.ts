import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [UserService]
})
export class ContactComponent implements OnInit {

  users: FirebaseListObservable<any[]>;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.getUsers()
  }

}
