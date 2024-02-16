import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../recipe.mode';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../../shopping-list/services/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ,[
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]
      ),
    new Recipe(
      'A test Recipe1',
      'This is simply a test1',
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=2428&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ,[
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1)
    ]
      ),
  ];

  getRecipes(){
    return this.recipes.slice(); // copy of the array
  }
  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
     this.shoppingListService.addIngredients(ingredients);
  }
  constructor(private shoppingListService: ShoppingListService) { }
}
