import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private URL = 'https://api.jsonbin.io/b/5c9cabce7dad4063ba917d2b/2';
  private contacts: any = JSON.parse(localStorage.getItem('contacts')) || [];

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(this.URL)
  }

  addContact(contact: Contact) {
    this.contacts.unshift(contact)
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }

  getContactsFromLocalStorage() {
    if(localStorage.getItem('contacts') === null) {
      return []
    }else {
      return JSON.parse(localStorage.getItem('contacts'))
    }
  }

  editContactFromLocalStorage(contact) {
    this.contacts.forEach((item, index) => {
      if (item.id === contact.id) {
        this.contacts.splice(index, 1)
        this.contacts.unshift(contact)
      }
    });
    localStorage.setItem('contacts', JSON.stringify(this.contacts))
  }
}
