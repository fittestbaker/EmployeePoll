import { render, screen } from "@testing-library/react";
import NotFound from "./NotFound";
import { MemoryRouter } from "react-router";

describe("render NotFound in document", () => {
  it("should be successful", async () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const button = screen.getByText(/NotFound/i);
    expect(button).toBeInTheDocument();
  });
});

describe("render 404 in document", () => {
  it("should be successful", async () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const button = screen.getByText(/404/i);
    expect(button).toBeInTheDocument();
  });
});

describe("render NotFound snapshot", () => {
  it("should be successful", async () => {
    var { component } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
