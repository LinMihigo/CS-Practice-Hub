import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { Navigator } from "./Context/navigation";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Navigator>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Navigator>,
);
