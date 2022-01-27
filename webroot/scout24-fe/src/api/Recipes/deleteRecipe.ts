import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";
import { MutationConfig, queryClient } from "api/react-query";

const API_URL = "http://localhost:8081";

export const deleteRecipe = async (recipeId: number) => {
  const response = await axios.delete<number, AxiosResponse<{ success: boolean }>>(
    API_URL + `/recipes/${recipeId}`
  );
  return response.data;
};

type UseDeleteRecipeOptions = {
  config?: MutationConfig<typeof deleteRecipe>;
};

export const useDeleteRecipe = ({ config }: UseDeleteRecipeOptions = {}) => {
  const result = useMutation(deleteRecipe, {
    onSuccess: () => {
      queryClient.invalidateQueries(["getAllRecipes"]);
    },
    ...config,
  });

  return result;
};
