import { render } from "@testing-library/react";
import { A11111 } from "./src/component/";
import "@testing-library/jest-dom";

test("A11111 Rendered", () => {
  const { getByText } = render(<A11111 />);
  const element = getByText("A Component");
  expect(element).toBeInTheDocument();
});
