import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import Provider from "../components/Provider";

render(
  <Provider>
    <Library />
  </Provider>,
  document.querySelector("#root")
);
