import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm

  defaultValue = 'teacher'
  answer = ''
  genders = ['male','female']
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender:''
  }

  submitted = false;
  // onSubmit(form: NgForm){
  //   console.log(form)
  // }

  onSubmit(){
    this.submitted = true
    console.log(this.signupForm)
    this.user.username = this.signupForm.value.userData.username
    this.user.email = this.signupForm.value.userData.email
    this.user.secret = this.signupForm.value.secret
    this.user.answer = this.signupForm.value.questionAnswer
    this.user.gender = this.signupForm.value.gender

    this.signupForm.reset()
  }
}
