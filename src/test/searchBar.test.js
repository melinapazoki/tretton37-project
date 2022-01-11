import { render, screen } from "@testing-library/react";
import SearchBar from "../components/SearchBar";
import "@testing-library/jest-dom/extend-expect";

describe("availableUsecase", () => {
  const setup = () => render(<SearchBar />);
  beforeEach(() => {});
  it("search by alphabet", () => {
    setup();
    const linkElement = screen.getByRole("button", {
      name: /Alphabet filter/i,
    });
    expect(linkElement).toBeInTheDocument();
  });
  it("change Grid", () => {
    setup();
    const linkElement = screen.getByRole("button", {
      name: /Grid View/i,
    });
    expect(linkElement).toBeInTheDocument();
  });
  it("change search option", () => {
    setup();
    const linkElement = screen.getByRole("button", {
      name: /Search option/i,
    });
    expect(linkElement).toBeInTheDocument();
  });
});
