import React from 'react';

import MobileWhiteLogo from "../../atoms/MobileWhiteLogo/MobileWhiteLogo"
import Carousel from "../../organisms/Carousel/Carousel"

import { Background, Circle } from "./Home-Styles"

const Home = ({User, activeCarouselItem}) =>{
  return (
    <Background>
      <Circle/>
      {/* {window.innerWidth < 700 ? <MobileWhiteLogo/> : <></>} */}
      <Carousel User={User} activeCarouselItem={activeCarouselItem}/>
    </Background>
  );
}

export default Home;
