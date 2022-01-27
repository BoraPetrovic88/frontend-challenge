import { render, screen } from "@testing-library/react";
import Button from "..";

describe("Button", () => {
  it("will show button text", () => {
    render(<Button text="test" />);
    expect(screen.getByText("test")).toBeInTheDocument();
  });
});
