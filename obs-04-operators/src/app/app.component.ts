import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  userActivated = false;
  private kepochi: Subscription; 

  constructor(private userService:UserService) {}


  ngOnInit() {
    this.kepochi = this.userService.activatedEmitter.subscribe((activated) => {
      this.userActivated = activated
    })
  }

  ngOnDestroy(): void {
      
    this.kepochi.unsubscribe()
  }
}
