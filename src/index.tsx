import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "styled-components";
import theme from "./styles/abstracts/theme";
import App from "./components/App/App";
import "normalize.css/normalize.css";
import "./styles/all.css";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.NODE_ENV === "production" ? "/react-pomodoro" : ""}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
