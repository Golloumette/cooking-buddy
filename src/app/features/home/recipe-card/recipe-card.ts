import { Component,input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-recipe-card',
  imports: [MatCardModule],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.scss'
})
export class RecipeCard {
 title = input.required<string>();
 urlImage = input.required<string>();
}
