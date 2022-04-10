import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import { Contact } from './contact';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConatctService {
  uri = `${environment.baseUri}`;

  constructor(private http: HttpClient) { }

  //1. save data
  createContact(contact: Contact): Observable<any> {
    return this.http.post(`${this.uri}/contact`, contact, {
      responseType: 'text',
    });
  }

  //2. fetch all
  fetchAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${this.uri}/contacts`);
  }

  //3. remove
  deleteContact(id: number) {
    return this.http.delete(`${this.uri}/contact/${id}`, {
      responseType: 'text',
    });
  }

  //4. fetch one
  fetchOneEmployee(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.uri}/contact/${id}`);
  }
}
