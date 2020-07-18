import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "./ContextAPI";
import "./css/vendors/font-awesome.min.css";
import "./index.css";
ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <Router basename="/E-commerce">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
serviceWorker.unregister();
