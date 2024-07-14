import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ModalProvider } from "./context/ModalContext.jsx";
import { ThemeProvider } from "./context/DarkModeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ModalProvider>
  </React.StrictMode>
);
