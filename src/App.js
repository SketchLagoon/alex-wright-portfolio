import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ResetCSS from "./ResetCSS"

import NavMenu from "./ui/organisms/NavMenu/NavMenu"

import Home from "./ui/pages/Home/Home"

import User from "./DummyData/DummyData"

const App = () => {
  return (
    <BrowserRouter>
      <ResetCSS/>
      <NavMenu User={User}/>
      <Switch>
          <Route exact path="/" render={(props)=><Home User={User}/>}/>
          {/* <Route path="/portfolio" component={portfolio}/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
