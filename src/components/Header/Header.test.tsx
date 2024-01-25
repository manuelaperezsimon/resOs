import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("when its instantiated", () => {
    test("Then it should show a resOs logo", () => {
      const logoAlt = "resOs logo";

      render(<Header />);

      const imageLogo = screen.getByAltText(logoAlt);

      expect(imageLogo).toBeInTheDocument();
    });
  });
});
