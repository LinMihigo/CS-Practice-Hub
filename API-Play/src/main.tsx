import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { Navigator } from "./Context/navigation";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Navigator>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Navigator>,
);
