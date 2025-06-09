import { inject, Injectable } from '@angular/core';
import { categorieDTO,recipe } from '../models/recipe';
import { firstValueFrom } from 'rxjs';
import { HttpClient  } from '@angular/common/http';
import {resource, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  //les propriétés de la classe
  private http=inject(HttpClient);
  public readonly categorie = signal<string>("");
  // agit comme un addevenlistener en change (chaque fois que le signal change on appel la fonction)
  public readonly recipeResource = resource({
    params: () => ({categorie: this.categorie()}),
    loader: ({params}) => this.getCategoryByName(params.categorie)});
  constructor() { }


  // methode pour recup toutes les categories
  async getAllCategories() {
    // result = la requete+objetDTO+adressURL
    // on utilise firstValueFrom pour convertir l'observable en promesse
   const result = await firstValueFrom ( this.http.get<categorieDTO>('https://www.themealdb.com/api/json/v1/1/list.php?c=list') )
   return result.meals.map(m => m.strCategory); 
}

//méthode pour set la categorie
  setCategorie(categorie: string) {
      console.log("entrée fonction setCategorie");
      this.categorie.set(categorie);
}


  async getCategoryByName(categorie: string) {
    console.log("entrée fonction getCategoryByName");
    const result = await firstValueFrom (this.http.get<recipe>('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + categorie));
    return result.meals;
  }

}




