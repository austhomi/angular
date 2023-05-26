import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  newServerName = '';

  servers = ['Testserver', 'Testserver 2'];
  constructor() {
    setTimeout(() => {this.allowNewServer=true}, 2000);
  }

  ngOnInit(): void {
      
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is: ' + this.newServerName;
    this.serverCreated = true;
    if(this.newServerName === ''){
      this.serverCreated = false;
    }
    this.servers.push(this.newServerName);
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.newServerName = (<HTMLInputElement>event.target).value;
  }
}

