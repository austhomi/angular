import { Component, OnChanges, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit, OnChanges {
  accounts : {name:string, status:string}[] = [];

  constructor(private accountService: AccountService) {}
  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accountService.accounts.push(newAccount);
    this.accounts = this.accountService.accounts;
    console.log(this.accounts)
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accountService.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.accounts = this.accountService.accounts;
  }

  ngOnInit() {
    this.accounts = this.accountService.accounts;
  }

  ngOnChanges() {
    this.accounts = this.accountService.accounts;
  }
}
