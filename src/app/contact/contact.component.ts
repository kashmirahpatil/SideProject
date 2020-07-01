import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  message: string;


  constructor( private db: AngularFireDatabase) { }

  ngOnInit() {
  }
  processForm() {
    this.db.list('/messages').push({ name: this.name, email: this. email, 
       message: this.message});
//Popup message
       alert('Thank you for contacting us, your message has gone through!')
  }
}
