import Login from "./Login";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<Login>", () => {
  it("should render the username element", () => {
    render(<Login />);
    const username = screen.getByLabelText(/Username/i);
    expect(username).toBeInTheDocument();
  });

  it("should render the username element", () => {
    render(<Login />);
    const password = screen.getByLabelText(/Password/i);
    expect(password).toBeInTheDocument();
  });

  it("should render the Login button element", () => {
    render(<Login />);
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
  });

  it("should be able to enter username and password then click on the login button", () => {
    const submitHandler = jest.fn();
    render(<Login onLogin={submitHandler} />);
    const username = screen.getByLabelText(/Username/i);
    fireEvent.change(username, { target: { value: "amit@test.com" } });
    const password = screen.getByLabelText(/Password/i);
    fireEvent.change(password, { target: { value: "amit123" } });

    const loginButton = screen.getByRole("button");
    fireEvent.click(loginButton);
    expect(submitHandler).toHaveBeenCalledWith({username: 'amit@test.com', password: 'amit123'});
  });
});
