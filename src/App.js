import React, { useState} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ResetCSS from "./ResetCSS";

import NavMenu from "./ui/organisms/NavMenu/NavMenu";
import MobileNavMenu from "./ui/organisms/MobileNavMenu/MobileNavMenu";
import Home from "./ui/pages/Home/Home";


import User from "./DummyData/DummyData";

const App = () => {
  const [activeCarouselItem, setActiveCarouselItem] = useState(0);

  const handleCarouselItemChange = slideId => {
    setActiveCarouselItem(slideId);
  };

  return (
    <BrowserRouter>
      <ResetCSS />

      {window.innerWidth < 700 ? (
        <MobileNavMenu
          User={User}
          handleCarouselItemChange={handleCarouselItemChange}
        />
      ) : (
        <NavMenu
          User={User}
          handleCarouselItemChange={handleCarouselItemChange}
        />
      )}

      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Home User={User} activeCarouselItem={activeCarouselItem} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
