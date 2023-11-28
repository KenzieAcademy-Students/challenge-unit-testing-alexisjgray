import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

// Example: This checks that the app contains an h1 tag with the text "test all the things!"
test('h1 tag contains text saying "Test all the things!"', () => {
  render(<App />);

  const header = screen.getByText(/test all the things!/i);

  expect(header).toBeInTheDocument();
  expect(header.tagName).toEqual("H1");
});

// Challenges:
// Write code to test that clicking the button in App.js will display the secret message.
// Check out App.js itself to see what the text should be.
test("clicking the button shows the secret message", () => {
  render(<App />);

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
  expect(button.tagName).toEqual("BUTTON");
});
