import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store";
const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
