import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shopping-cart';
  loadedFeature = 'recipe'
  
  showHelloWorld = false;

  onFeatureSelected(feature: string){
    this.loadedFeature = feature;
  }
  ngOnInit(): void {
    setInterval(() => {this.showHelloWorld = !this.showHelloWorld}, 1000)
  }
}