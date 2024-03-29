import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.mode';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService){}

}
