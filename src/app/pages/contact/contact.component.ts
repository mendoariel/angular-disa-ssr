import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  spinner = false;
  sent = false;

  constructor(private _email: EmailService) { }

  ngOnInit() {
    console.log('hola');
    this. createForm();
  }

  createForm() {
    
    this.contactForm = new FormGroup({
      fullName: new FormControl(''),
      email: new FormControl('', RxwebValidators.email()),
      subject: new FormControl(''),
      message: new FormControl('')
     });
  }

  sendMessage() {
    this.spinner = true;
    this._email.sendEmail(this.contactForm.value).subscribe(
      res => {
        this.spinner = false;
        this.sent = true;
        console.log(res)
      },
      err => {
        this.spinner = false;
        console.log(err)
      }
    );
  }

}
