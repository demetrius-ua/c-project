import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
   private recipes: Recipe[] = [
    new Recipe(
      'Italian pasta',
      'Some good staff to cook at home',
      '../../assets/img/pasta.jpg',
    [
      new Ingredient('Spagetti', 400),
      new Ingredient('Cheese', 200),
      new Ingredient('Sweet basil sauce', 150),
      new Ingredient('Oregano', 15)
    ]),
    new Recipe(
      'West-side burger',
      'Some good staff to cook at home',
      '../../assets/img/burger.jpg',
    [
      new Ingredient('Ground beef', 500),
      new Ingredient('Buns', 4),
      new Ingredient('Latice', 2),
      new Ingredient('Tomato', 2)
    ]),
    new Recipe(
      'Ceasar salad',
      'Some good staff to cook at home',
      '../../assets/img/ceasar-salad.jpg',
    [
      new Ingredient('Chiken filet', 400),
      new Ingredient('Salad leaves', 250),
      new Ingredient('Bread', 1),
      new Ingredient('Cherry tomatoes', 15)
    ]),
    new Recipe(
      'Greek salad',
      'Some good staff to cook at home',
      '../../assets/img/greek-salad.jpg',
    [
      new Ingredient('Paprica', 1),
      new Ingredient('Tomato', 3),
      new Ingredient('Cocumber', 2),
      new Ingredient('Black olives', 20),
      new Ingredient('Feta cheese', 150)
    ])

  ];
   
   constructor(private slService: ShoppingListService) {}


   setRecipes(recipes: Recipe[]) {
     this.recipes = recipes;
     this.recipesChanged.next(this.recipes.slice());
   }
   getRecipes() {
     return this.recipes.slice();
   }
   getRecipe(index: number) {
     return this.recipes[index];
   }
   addIngredientsToShoppingList(ingredients: Ingredient[]) {
     this.slService.relocateIngredients(ingredients);
   }
   addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
   }
   updateRecipe(index: number, newRecipe: Recipe) {
     this.recipes[index] = newRecipe;
     this.recipesChanged.next(this.recipes.slice());
   }
   deleteRecipe(index: number) {
     this.recipes.splice(index, 1);
     this.recipesChanged.next(this.recipes.slice());
   }
}
