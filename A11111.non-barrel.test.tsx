import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import A11111 from "./src/component/1/1/1/1/A11111";

test("A11111 Rendered", () => {
  const { getByText } = render(<A11111 />);
  const element = getByText("A Component");
  expect(element).toBeInTheDocument();
});
