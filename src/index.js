import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter basename='industry-expertise'>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
