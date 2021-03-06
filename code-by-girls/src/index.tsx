import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import { AppProvider } from "./Providers";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
