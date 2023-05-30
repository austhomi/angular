import { Component, EventEmitter, OnChanges, OnInit, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit, OnChanges {
  isStarted = false;
  counter = 0;
  ref;

  @Output() counterChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  toggleStartGame(){
    this.isStarted = !this.isStarted;

    if(this.isStarted){
      this.startGame();
    }
    else{
      this.stopGame();
    }
  }

  startGame(){
    this.ref = setInterval(() => {
      this.incrementCounter()
    }, 1000);
  }

  stopGame(){
    clearInterval(this.ref);
  }

  incrementCounter(){
    console.log(this.counter);
    this.counter++;
    this.counterChanged.emit(this.counter);
  }
}
