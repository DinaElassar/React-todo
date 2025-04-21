import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Providers from "./components/Providers";

const App = React.lazy(() => import("./App"));
const root = ReactDOM.createRoot(document.getElementById("root"));
const app = (
  <Providers>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </BrowserRouter>
  </Providers>
);
//disabled in production to avoid unnecessary checks.
root.render(
  process.env.NODE_ENV === "development" ? (
    <React.StrictMode>{app}</React.StrictMode>
  ) : (
    app
  )
);
