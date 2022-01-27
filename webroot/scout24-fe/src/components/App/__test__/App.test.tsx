import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "components/App";
import AppProviders from "providers/AppProviders";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <AppProviders>
        <App />
      </AppProviders>
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
