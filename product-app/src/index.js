import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./style.css";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App />);
