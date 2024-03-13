import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit{
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

  shopListForm: FormGroup;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.shopListForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    });
  }

  onAddItem() {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount: number = parseInt(this.amountInputRef.nativeElement.value);

    const ingName = this.shopListForm.value.name;
    const ingAmount: number = this.shopListForm.value.amount;
    this.shoppingListService.addIngredient(new Ingredient(ingName, ingAmount));
  }
}
