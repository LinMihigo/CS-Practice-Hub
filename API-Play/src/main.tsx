import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { Navigator } from "./Context/navigation";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <Navigator>
        <App />
      </Navigator>
    </React.StrictMode>
);
