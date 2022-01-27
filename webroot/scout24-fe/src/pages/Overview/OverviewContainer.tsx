import React, { useState } from "react";
import RecipeInfo from "./components";
import Search from "components/Search";
import Shell from "components/Shell";
import "./OverviewContainer.scss";
import { useGetAllRecipes } from "api/Recipes/getAllRecipes";
import Pagination from "components/Pagination";
import { useDeleteRecipe } from "api/Recipes/deleteRecipe";

export const OverviewContainer: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const { data: recipesList, isLoading: isRecipesListLoading } = useGetAllRecipes(
    page,
    searchValue
  );
  const { mutate: deleteRecipe, isLoading: isDeleteRecipeLoading } = useDeleteRecipe();

  const handleDeleteRecipe = (recipeId: number) => {
    if (window.confirm("Delete the recipe?")) {
      deleteRecipe(recipeId);
    }
  };

  if (isRecipesListLoading || isDeleteRecipeLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Shell>
      <div className="overview">
        <h1 className="title">Recipes overview</h1>
        <Search setSearchValue={setSearchValue} />
        <div className="list-container">
          {recipesList?.recipes.map((recipe) => {
            return (
              <React.Fragment key={recipe.id}>
                <RecipeInfo recipe={recipe} setDeleteRecipeId={handleDeleteRecipe} />
              </React.Fragment>
            );
          })}
        </div>
        <Pagination
          setPageNumber={setPage}
          totalPages={recipesList?.totalPages as number}
          activePage={page}
        />
      </div>
    </Shell>
  );
};
