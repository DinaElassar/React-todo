import React from "react";
import { render, waitFor } from "@testing-library/react";
import { AuthProvider, AuthContext } from "../store/AuthContext";

test("login sets the user in AuthContext", async () => {
  let contextValue;
  const TestComponent = () => {
    const { user, login } = React.useContext(AuthContext);
    contextValue = { user, login };
    return null;
  };

  render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  );

  // Initially, no user is logged in
  expect(contextValue.user).toBeNull();

  // Attempt login with valid credentials
  contextValue.login("user", "password");

  await waitFor(() => {
    expect(contextValue.user).not.toBeNull();
  });

  await waitFor(() => {
    expect(contextValue.user.username).toBe("user");
  });
});
