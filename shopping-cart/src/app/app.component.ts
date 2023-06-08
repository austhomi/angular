import { Component, OnInit} from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]
})
export class AppComponent implements OnInit{
  title = 'shopping-cart';
  
  showHelloWorld = false;

  ngOnInit(): void {
    setInterval(() => {this.showHelloWorld = !this.showHelloWorld}, 1000)
  }
}