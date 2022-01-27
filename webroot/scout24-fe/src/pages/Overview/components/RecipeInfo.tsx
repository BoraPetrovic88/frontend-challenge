import { RecipeModel } from "api/Recipes/type";
import Button from "components/Buton";
import "./RecipeInfo.scss";

export interface Props {
  recipe: RecipeModel;
  setDeleteRecipeId: (recipeId: number) => void;
}

export const RecipeInfo: React.FC<Props> = ({ recipe, setDeleteRecipeId }) => {
  return (
    <div className="recipe-info">
      <div className="recipe-info-wrapper">
        <Button text="Delete" onClick={() => setDeleteRecipeId(recipe.id)} />
        <h3 className="title">{recipe.title}</h3>
        <p className="description">{recipe.description}</p>
      </div>
    </div>
  );
};
