import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private URL = 'https://api.jsonbin.io/b/5c9cabce7dad4063ba917d2b/2'

  constructor(private http: HttpClient) { }

  getContacts() {
    return this.http.get(this.URL)
  }
}
