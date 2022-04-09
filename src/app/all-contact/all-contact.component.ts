import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ConatctService } from '../conatct.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-contact',
  templateUrl: './all-contact.component.html',
  styleUrls: ['./all-contact.component.css']
})
export class AllContactComponent implements OnInit {
//define array variable
contacts: Contact[] = [];
message: string = '';

constructor(private service: ConatctService, private router:Router) {}

  ngOnInit(): void {
    this.fetchAllContacts();
  }
//call service method to fetch data
fetchAllContacts() {
  this.service.fetchAllContacts().subscribe(
    (data) => {
      this.contacts = data;
    },
    (error) => {
      console.log(error);
    }
  );
}

deleteContact(id: number) {
  this.service.deleteContact(id).subscribe(
    (data) => {
      this.message=data;
      this.fetchAllContacts();
    },
    (error) => {
      console.log(error);
    }
  );
}

editContact(id: number) {
  this.router.navigate(['edit',id]);
}

}
