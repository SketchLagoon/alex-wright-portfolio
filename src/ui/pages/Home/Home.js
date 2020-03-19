import React from 'react';

import About from "../../templates/About/About"

import { Background, Circle } from "./Home-Styles"

const Home = ({User}) =>{
  return (
    <Background>
      <Circle/>
      <About name={User.name} roles={User.roles} bio={User.bio}/>
    </Background>
  );
}

export default Home;
