import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ChatMessage } from "./ChatMessage";

test("esta", () => {
  render(<ChatMessage />);
});
