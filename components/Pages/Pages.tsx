import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';

const Pages = () =>{

  return (
     <><Home active='inactive' />
      <About active='inactive' />
      <Resume active = 'active' />
      </>
  )
}

export default Pages;