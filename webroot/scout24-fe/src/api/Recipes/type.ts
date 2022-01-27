export interface RecipeApiModel {
  currentPage: number;
  totalPages: number;
  recipes: RecipeModel[];
}

export interface RecipeModel {
  id: number;
  title: string;
  description: string;
  created?: string;
  modified?: string;
  ingredients?: IngredientsModel[];
}

export interface IngredientsModel {
  name: string;
  amount: number;
  unit: string;
}
