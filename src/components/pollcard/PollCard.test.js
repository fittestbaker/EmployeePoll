import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PollCard from "./PollCard";
import { MemoryRouter } from "react-router";

describe("render PollCard in document", () => {
  it("should be successful", async () => {
    const questionInput = {
      author: "sarahedo",
      timestamp: 1467166872634,
      id: "6ni6ok3ym7mf1p33lnez",
    };
    render(
      <MemoryRouter>
        <PollCard question={{ questionInput }} />
      </MemoryRouter>
    );

    const button = screen.getByText(/show/i);
    expect(button).toBeInTheDocument();
  });
});

describe("render PollCard snapshot", () => {
  it("should be successful", async () => {
    const questionInput = {
      author: "sarahedo",
      timestamp: 1467166872634,
      id: "6ni6ok3ym7mf1p33lnez",
    };
    var { component } = render(
      <MemoryRouter>
        <PollCard question={{ questionInput }} />
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});

describe("render PollCard click", () => {
  it("should be successful", async () => {
    const questionInput = {
      author: "sarahedo",
      timestamp: 1467166872634,
      id: "6ni6ok3ym7mf1p33lnez",
    };
    render(
      <MemoryRouter>
        <PollCard question={{ questionInput }} />
      </MemoryRouter>
    );

    const button = screen.getByText(/Show/i);
    fireEvent.click(button);

    setTimeout(() => {
      const pollElement = screen.getByText(/Showing/i);
      expect(pollElement).toBeInTheDocument();
    }, 1000);
  });
});
