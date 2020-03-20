import React from 'react';

import Carousel from "../../organisms/Carousel/Carousel"

import { Background, Circle } from "./Home-Styles"

const Home = ({User, activeCarouselItem}) =>{
  return (
    <Background>
      <Circle/>
      <Carousel User={User} activeCarouselItem={activeCarouselItem}/>
      {/* <About name={User.name} roles={User.roles} bio={User.bio} active={"yes"}/> */}
    </Background>
  );
}

export default Home;
