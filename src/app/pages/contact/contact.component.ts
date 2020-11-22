import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
    console.log('hola');
    this. createForm();
  }

  createForm() {
    
    this.contactForm = new FormGroup({
      fullName: new FormControl('', RxwebValidators.maxLength({value: 100 })),
      email: new FormControl(''),
      subject: new FormControl(''),
      message: new FormControl('')
     });
  }

  sendMessage() {
    console.log(this.contactForm.get('fullName'))
  }

}
