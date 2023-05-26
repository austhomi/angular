import { Component } from '@angular/core';

@Component({
  selector: 'app-mywords',
  templateUrl: './mywords.component.html',
  styleUrls: ['./mywords.component.css']
})
export class MywordsComponent {
  displayWord=false;
  word = 'Hello World!'
  logs = [];

  toggleDisplayWord(){
    this.displayWord = !this.displayWord;
    this.logs.push(new Date())
  }

  getSplit(){
    return this.word.split('');
  }

}
