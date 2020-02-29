import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactsList: any;
  enableEdit: boolean = false;
  currentId: number;
  showForm: boolean = false;
  termName: string;
  termId: number;

  constructor(private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(data => {
      let contactsFromLocalStorage = this.contactsService.getContactsFromLocalStorage();
      this.contactsList = contactsFromLocalStorage.concat(data);
    });
  };

  onEdit(id: number): void {
    this.currentId = id
    this.enableEdit = true;
  };

  saveContact(contact): void {
    this.enableEdit = false;
    this.currentId = null;
    this.contactsService.editContactFromLocalStorage(contact)

  }  

  handleAddContactBtn() {
    this.showForm = !this.showForm;
  }

  onNewContact(contact) {
    contact.id = this.contactsList.length + 1;
    this.contactsService.addContact(contact);
    this.contactsService.getContacts().subscribe(data => {
      let contactsFromLocalStorage = this.contactsService.getContactsFromLocalStorage();
      this.contactsList = contactsFromLocalStorage.concat(data);
    });
    this.showForm = !this.showForm
  }

}
