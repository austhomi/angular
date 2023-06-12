import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  submitted = false

  subscriptionChoices = ['Basic','Advanced','Pro']
  defaultSubscription = 'advanced'

  user = {
    email: '',
    subscription:'',
    password:''
  }

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.signupForm)
    this.submitted = true

    this.user.email = this.signupForm.value.userData.email
    this.user.subscription = this.signupForm.value.userData.subscription,
    this.user.password = this.signupForm.value.userData.password


    // Reset the form
    // this.signupForm.reset()
  }
}
