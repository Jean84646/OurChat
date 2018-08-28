import { User } from './models/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "contact",
  pure: false
})

export class ContactPipe implements PipeTransform {
  transform(users: any[], searchText: string): any[] {
    if(!users) return [];
    if(!searchText) return users;

    return users.filter(user => {
      for(var i = 0; i < user.contacts.length; i++){
        var contact = user.contacts[i].includes(searchText);
        if(contact === true){
          var person = user.contacts[i];
        }
      }
      return person;
    });
  }
}
