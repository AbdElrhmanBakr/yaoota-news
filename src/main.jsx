import React from "react";
import ReactDOM from "react-dom/client";
import App from "./container/App";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/UsersContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsersProvider>
  </React.StrictMode>
);
