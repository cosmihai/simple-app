import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/models/contact';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactsList: object;
  enableEdit: boolean = false;
  currentId: number;
  showForm: boolean = false

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(data => {
      this.contactsList = data
    });
  };

  editContact(id: number): void {
    this.currentId = id
    this.enableEdit = true;
  };

  saveContact(contact): void {
    console.log(contact)
    this.enableEdit = false;
    this.currentId = null;
  }  

  handleAddContactBtn() {
    this.showForm = !this.showForm;
  }

  onNewContact(contact) {
    console.log(contact)
  }

}
