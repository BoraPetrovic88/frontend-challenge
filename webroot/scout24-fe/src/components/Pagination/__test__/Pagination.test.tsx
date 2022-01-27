import { render, screen } from "@testing-library/react";
import Pagination from "..";

const activePageMock = 2;
const totalPagesMock = 5;

const mockImplementatin = () => {
  render(
    <Pagination
      activePage={activePageMock}
      totalPages={totalPagesMock}
      setPageNumber={() => null}
    />
  );
};

describe("Pagination", () => {
  it("will show pagination page", () => {
    mockImplementatin();
    expect(screen.getByText(5)).toBeInTheDocument();
  });
  it("will show active pagination page", () => {
    mockImplementatin();
    expect(screen.getByText(2)).toHaveClass("active");
  });
});
