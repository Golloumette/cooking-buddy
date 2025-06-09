import { Component,signal,output, effect } from '@angular/core';
import { PageLayoutComponent } from '../../../shared/layouts/page-layout-component/page-layout-component';
import { RecipeService } from '../../../core/services/recipe.service';
import { inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { RecipeCategory } from '../recipe-category/recipe-category';
import { RecipeCard } from '../recipe-card/recipe-card';



@Component({
  selector: 'app-home-page',
  imports: [PageLayoutComponent, RecipeCategory,RecipeCard],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage implements OnInit {
  private readonly recipeService = inject(RecipeService);
  categories = signal<string[]>([]);
   //(ex signal) users = signal<User[]>([])
  recipesResource = this.recipeService.recipeResource;
 // categorieOnput = output<categorie>();
  async ngOnInit() {
    const categories = await this.recipeService.getAllCategories();
    this.categories.set(categories);
    console.log(categories);
  }
  changeCategorie(categorie: string) {
    console.log("entrée fonction changeCategorie", categorie);
   
    //pas de fetch car c'est quand on modifie la valeur qui estune ressource qu'on appel la méthode fetch
    this.recipeService.setCategorie(categorie);
   
  }
 
}

  