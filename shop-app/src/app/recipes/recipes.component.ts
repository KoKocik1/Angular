import { Component } from '@angular/core';
import { RecipeService } from './services/recipe.service';
import { Recipe } from './recipe.mode';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent {
  selectedRecipe: Recipe;
  constructor() {
    
  }
}
