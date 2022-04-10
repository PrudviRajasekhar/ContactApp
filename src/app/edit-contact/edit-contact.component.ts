import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { ConatctService } from '../conatct.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  //Form Backing Object
  contact : Contact = new Contact(0,'',0,'','');

  constructor(private service:ConatctService, private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //read parameter from routing
    const id = this.activatedRoute.snapshot.params['id'];
    //make service call to fetch data and fill in employee
    this.service.fetchOneEmployee(id)
    .subscribe(data=>{
      this.contact=data;
    },error=>{
      console.log(error);
      this.router.navigate(['list']);
    })
  }
  updateContact(){
    this.service.createContact(this.contact)
    .subscribe(data=>{
      console.log(data);
      this.router.navigate(['list']);
    },error=>{
      console.log(error);
    })
  }

}
