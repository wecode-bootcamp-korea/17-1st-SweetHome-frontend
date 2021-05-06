import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./styles/common.scss";
import "./styles/reset.scss";
import { Provider } from "react-redux";
import configure from "./store/configure";

export const store = configure();

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
