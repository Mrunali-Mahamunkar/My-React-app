import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";
import { projects } from "../data";

test("renders Projects section", () => {
  render(<Projects />);
  expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  projects.forEach(project => {
    expect(screen.getByText(project.title)).toBeInTheDocument();
  });
});