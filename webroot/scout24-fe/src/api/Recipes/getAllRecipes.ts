import { useQuery, QueryKey } from "react-query";
import axios from "axios";
import { RecipeApiModel } from "./type";
import { QueryConfig } from "api/react-query";

const API_URL = "http://localhost:8081";

export const getAllRecipes = async (page: number, oven: string): Promise<RecipeApiModel> => {
  const data = await axios
    .get<RecipeApiModel>(API_URL + `/recipes?${oven !== "" ? `search=${oven}` : ""}&page=${page}`)
    .then((response) => response.data);
  return data;
};

type GetPortfolioOverviewOptions = {
  config?: QueryConfig<typeof getAllRecipes>;
};

export const useGetAllRecipes = (
  page: number,
  oven: string,
  { config }: GetPortfolioOverviewOptions = {}
) => {
  return useQuery(["getAllRecipes", page, oven] as QueryKey, () => getAllRecipes(page, oven), {
    keepPreviousData: true,
    ...config,
  });
};
