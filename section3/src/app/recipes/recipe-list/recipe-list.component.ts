import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Test Recipe", "This is just a test", "https://images.freeimages.com/images/large-previews/351/pumpkin-pie-4-1326875.jpg")
  ];
    
  constructor() {}

  ngOnInit() {

  }
}
