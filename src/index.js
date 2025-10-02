import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AuthContext from "./Context/auth-context";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <AuthContext>
    <App />
  </AuthContext>
);

serviceWorker.unregister();
