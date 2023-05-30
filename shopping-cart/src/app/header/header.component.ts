import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  
  collapsed = true;

  feature = 'recipe';

  constructor() { }

  openFeature(feature: string){
    this.feature = feature;    
    this.featureSelected.emit(this.feature);
  }
}
