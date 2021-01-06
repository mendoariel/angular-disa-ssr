// some changes
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  aux = 0;

  constructor(private _email: EmailService) { }

  ngOnInit() {
    this. createForm();
  }

  createForm() {
    
    this.contactForm = new FormGroup({
      fullName: new FormControl('', [Validators.max(50), Validators.required]),
      email: new FormControl('', [RxwebValidators.email(), Validators.max(50)]),
      subject: new FormControl('', [Validators.max(50), Validators.required]),
      message: new FormControl('', [Validators.max(800), Validators.required])
     });
  }

  sendAgain() {
    this.contactForm.reset();
    this.sent = false;
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
