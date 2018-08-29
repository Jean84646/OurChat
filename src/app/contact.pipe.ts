import { User } from './models/user';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: "contact",
  pure: false
})

export class ContactPipe implements PipeTransform {
  transform(contacts: any[], searchText: string): any[] {
    if(!contacts) return [];
    if(!searchText) return contacts;

    return contacts.filter(contact => {
      return contact.includes(searchText);
    });
  }
}
