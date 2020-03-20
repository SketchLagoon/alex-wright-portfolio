import React from 'react';

import About from "../../templates/About/About"
import Design from "../../templates/Design/Design"
import Development from "../../templates/Development/Development"
import CaseStudies from "../../templates/CaseStudies/CaseStudies"


import { CarouselWrapper } from "./Carousel-Styles"

const Carousel = ({User, activeCarouselItem}) =>{
  return (
    <CarouselWrapper>
        <About name={User.name} roles={User.roles} bio={User.bio} active={activeCarouselItem === 0? "yes" : "no"}/>
        <Design active={activeCarouselItem === 1? "yes" : "no"}/>
        <Development active={activeCarouselItem === 2? "yes" : "no"}/>
        <CaseStudies active={activeCarouselItem === 3? "yes" : "no"}/>
    </CarouselWrapper>
  );
}

export default Carousel;
