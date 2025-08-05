import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders About Me section", () => {
  render(<About />);
  expect(screen.getByText(/About Me/i)).toBeInTheDocument();
  expect(screen.getByText(/Mrunali Mahamunkar/i)).toBeInTheDocument();
});
