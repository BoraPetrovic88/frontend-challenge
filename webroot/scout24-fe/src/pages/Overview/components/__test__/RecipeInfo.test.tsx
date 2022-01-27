import { render, screen } from "@testing-library/react";
import RecipeInfo from "..";

const mockRecipe = { id: 1, title: "test", description: "test test" };

const mockImplementatin = () => {
  render(<RecipeInfo recipe={mockRecipe} setDeleteRecipeId={() => null} />);
};

describe("RecipeInfo", () => {
  it("will show title", () => {
    mockImplementatin();
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  it("will show description", () => {
    mockImplementatin();
    expect(screen.getByText("test test")).toBeInTheDocument();
  });
  it("will show button", () => {
    mockImplementatin();
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Delete");
  });
});
