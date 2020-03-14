import React from 'react';

import SummaryDisplay from "../../templates/SummaryDisplay/SummaryDisplay"

const Home = ({User}) =>{
  return (
    <SummaryDisplay name={User.name} roles={User.roles}/>
  );
}

export default Home;
