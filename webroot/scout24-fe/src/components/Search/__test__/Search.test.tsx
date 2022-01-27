import { fireEvent, render, screen } from "@testing-library/react";
import Search from "..";

describe("Search", () => {
  it("will show button text", () => {
    render(<Search />);
    const input = screen.getByPlaceholderText("Filter recipes...");
    fireEvent.change(input, { target: { value: "test" } });
    expect(input).toHaveValue("test");
  });
});
