import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { UserService } from '../user.service';
import { ContactPipe } from '../contact.pipe';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [UserService]
})
export class ContactComponent implements OnInit {

  users;
  contacts;
  constructor(private userService: UserService) { }

  ngOnInit() {
     this.userService.getUsers().subscribe(dataLastEmitted => {
        this.users = dataLastEmitted;
    });
  }


}
