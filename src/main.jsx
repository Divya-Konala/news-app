import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { NewsContextProvider } from "./context/NewsContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NewsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NewsContextProvider>
  </React.StrictMode>
);
