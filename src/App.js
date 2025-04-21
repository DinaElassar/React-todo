import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { AuthContext } from "./store/AuthContext";

function App() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <header
        style={{
          padding: "10px",
          background: "#eee",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1>My To-Do App</h1>
        </div>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>
            Public Todos
          </Link>
          {user ? (
            <>
              <Link to="/todos" style={{ marginRight: "10px" }}>
                My Todos
              </Link>
              <span style={{ marginRight: "10px" }}>
                Logged in as {user.username}
              </span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to="/login" style={{ marginRight: "10px" }}>
              Login
            </Link>
          )}
        </nav>
      </header>
      <AppRoutes isAuthenticated={!!user} />
    </div>
  );
}

export default App;
