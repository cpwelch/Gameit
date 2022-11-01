import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./reducers/gameReducer";
import { Provider } from "react-redux";
import gameDetailReducer from "./reducers/gameDetailReducer";
import { BrowserRouter } from "react-router-dom";

const store = configureStore(
  {
    reducer: {
      game: gameReducer,
      detail: gameDetailReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
