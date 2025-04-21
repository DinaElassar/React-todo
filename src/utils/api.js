export const loginUser = async (username, password) => {
  // Simulate an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (username === "user" && password === "password") {
          localStorage.setItem("my_todo_user", JSON.stringify(username));
        resolve({ username });
      } else {
        reject("Invalid credentials");
      }
    }, 500);
  });
};

