import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import configureStore from "./redux/store";

import { createStore } from "redux";
import rootReducer from "./redux/reducers";

import { applyMiddleware } from "redux";

const customMiddleware = (store) => (next) => (action) => {
  console.log("customMiddleware", action);
  const customAction = { ...action, customValue: "vikas" };

  next(customAction);
};

const store = createStore(rootReducer, {}, applyMiddleware(customMiddleware));

store.subscribe(() => console.log("store updated", store.getState()));

// alternate way to use store, we can pass initial state here
// const { store } = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   React.createElement("H1", { style: { color: "red" } }, "Hello World"),
//   document.getElementById("root")
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
