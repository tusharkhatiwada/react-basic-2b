import React from "react";
import ReactDOM from "react-dom";

import "./bootstrap.min.css";
import "./index.css";

import App from "./App";
import Welcome from "./Welcome";
import Counter from "./Counter";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Counter />, document.getElementById("root"));
registerServiceWorker();
