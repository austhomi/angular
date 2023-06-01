import { Component, Output, ViewChild, EventEmitter,ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;

  @Output() itemAdded = new EventEmitter<Ingredient>();
  constructor() { }

  addItem() {
    if (this.nameInputRef.nativeElement.value !== '' && this.amountInputRef.nativeElement.value !== '') {
      console.log('Item added' + this.nameInputRef.nativeElement.value) 
      this.itemAdded.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.valueAsNumber));
    }
    else{
      console.log('Item not added')
    }
  }

}
