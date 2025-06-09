import { Component,input,output } from '@angular/core';
import {MatSelect, MatSelectChange, MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-recipe-category',
  imports: [MatSelectModule],
  templateUrl: './recipe-category.html',
  styleUrl: './recipe-category.scss'
})
export class RecipeCategory {
      categories = input.required<string[]>(); // Liste des catégories de recettes
      categorieOutput = output<string>(); // Évé
      // 
changeCategorie(event: MatSelectChange) {
  this.categorieOutput.emit(event.value); // Émet la catégorie sélectionnée
}
}