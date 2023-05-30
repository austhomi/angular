import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();

  @ViewChild('serverContent',{static:true}) serverContentInput:ElementRef;
  // newServerName = '';
  // newServerContent = '';

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName:HTMLInputElement) {
    this.serverCreated.emit({serverName: serverName.value, serverContent:this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverName:HTMLInputElement) {
    this.blueprintCreated.emit({blueprintName: serverName.value, blueprintContent:this.serverContentInput.nativeElement.value});
  }

  // onAddBlueprint() {
  //   this.blueprintCreated.emit({blueprintName: this.newServerName, blueprintContent:this.newServerContent});
  // }
}
