import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(contacts: any, term: any): any {
    //check if search term is undefined
    if(term === undefined || term === null) return contacts;
    //return updated contacts list filtered by name
    if(typeof term === 'string') {
      return contacts.filter((contact) => {
        return contact.first_name.toLowerCase().includes(term.toLowerCase())
      })
    }
    //return updated contacts list filtered by id 
    if(typeof term === 'number') {
      return contacts.filter((contact) => {
        if(term) {
          return contact.id.toString().includes(term.toString())
        }
      }) 
    }
  }

}
