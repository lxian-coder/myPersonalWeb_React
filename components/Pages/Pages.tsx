import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import './Pages.scss';

const Pages = () =>{

  return (
     <><Home active='inactive' />
      <About active='inactive' />
      <Resume active = 'active' />
      <div className="snowEffect"></div>
      </>
  )
}

export default Pages;