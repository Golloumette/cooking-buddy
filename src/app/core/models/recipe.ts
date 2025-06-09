export interface RecipeTO {
   

}
export interface recipe{
 meals: {strMeal:string,
        strMealThumb:string,
        idMeal:string,
    }[];
}


// ajouter pour récupérer les catégories
export interface categorieDTO {
    // on regarde le retour de l'api pour avoir le format 
  meals:{strCategory:string}[];
}