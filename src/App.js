import React from "react";
import SliderMain from "./Componats/Slider";
import Menu from "./Componats/Menu";
import { Switch, Route, Redirect } from "react-router-dom";
import Footer from "./Componats/Footer";
export default function App() {
  return (
    <React.Fragment>
      <Menu />
      <SliderMain />
      <Footer />
    </React.Fragment>
  );
}
