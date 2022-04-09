import { Component, OnInit } from '@angular/core';
import {ConatctService} from '../conatct.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

   //Form Backing Object
   contact : Contact = new Contact(0,'',0,'','');
   message : string = '';
   //DI

  constructor(private service:ConatctService) { }

  ngOnInit(): void {
  }
  createContact() {
    this.service.createContact(this.contact)
    .subscribe(data=>{
      this.message = data;
      this.contact = new Contact(0,'',0,'','');
    },error=>{
      console.log(error);
      this.message = 'Unable to save! Contact Admin';
    });
  }
}
