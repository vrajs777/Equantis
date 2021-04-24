import React from "react";
import SliderMain from "./Componats/Slider";
import Menu from "./Componats/Menu";
import { Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={SliderMain} />
        {/* <Route path='/'>
          <SliderMain />
        </Route> */}
        {/* <Menu /> */}
        {/* <SliderMain /> */}
      </Switch>
    </React.Fragment>
  );
}
