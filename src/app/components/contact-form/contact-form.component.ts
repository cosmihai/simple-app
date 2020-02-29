import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Output() newContact: EventEmitter<Contact> = new EventEmitter()

  contact: Contact = {
    gender: '',
    email: '',
    last_name: '',
    first_name: '',
    id: null,
    address: {
        id: null,
        user_id: null,
        street: '',
        number: ''
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(contact) {
    this.contact = {
      id: null,
      gender: contact.gender,
      email: contact.email,
      last_name: contact.lastName,
      first_name: contact.firstName,
      address: {
        id: null,
        user_id: null,
        street: contact.streetName,
        number: contact.streetNumber
      }
    }
    this.newContact.emit(this.contact)
  }

}
