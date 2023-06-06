import { Component, Output, ViewChild, EventEmitter,ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})

export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  @Output() itemAdded = new EventEmitter<Ingredient>();
  constructor(private slService: ShoppingListService) { }

  addItem() {
    const newItem = new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.valueAsNumber)
    if (this.nameInputRef.nativeElement.value !== '' && this.amountInputRef.nativeElement.value !== '') {
      this.slService.addIngredient(newItem)
    }
    else{
      console.log('Item not added')
    }
  }

  clearItem(){
    this.nameInputRef.nativeElement.value = ''
    this.amountInputRef.nativeElement.value = ''
  }

}
