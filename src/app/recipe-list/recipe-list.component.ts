import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }

  viewRecipe(id: number) {
    this.router.navigate(['/recipe', id]);
  }
}
