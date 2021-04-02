import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';

const Pages = () =>{

  return (
     <><Home active='inactive' />
      <About active='active' /></>
  )
}

export default Pages;