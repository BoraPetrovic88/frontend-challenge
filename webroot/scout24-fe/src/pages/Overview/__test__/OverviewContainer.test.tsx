import { render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { OverviewContainer } from "../OverviewContainer";
import { useGetAllRecipes } from "api/Recipes/getAllRecipes";

const mockUseGetAllRecipes = useGetAllRecipes as jest.Mock;
jest.mock("api/Recipes/getAllRecipes");
const mockRecipesList = [
  { id: 1, title: "test1", description: "test1 test1" },
  { id: 2, title: "test2", description: "test2 test2" },
  { id: 3, title: "test3", description: "test3 test3" },
];

const queryClient = new QueryClient();

const mockImplementatin = () => {
  mockUseGetAllRecipes.mockImplementationOnce(() => ({
    data: {
      currentPage: 1,
      totalPages: 1,
      recipes: mockRecipesList,
    },
  }));
  render(
    <QueryClientProvider client={queryClient}>
      <OverviewContainer />
    </QueryClientProvider>
  );
};

describe("OverviewContainer", () => {
  it("will show title", () => {
    mockImplementatin();
    expect(screen.getByText("Recipes overview")).toBeInTheDocument();
  });
  it("will show recipe title", () => {
    mockImplementatin();
    expect(screen.getByText("test1")).toBeInTheDocument();
  });
  it("will show recipe description", () => {
    mockImplementatin();
    expect(screen.getByText("test1 test1")).toBeInTheDocument();
  });
  it("will show delete button", () => {
    mockImplementatin();
    const button = screen.getAllByRole("button");
    expect(button[1]).toHaveTextContent("Delete");
  });
  it("will show pagination", () => {
    mockImplementatin();
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
