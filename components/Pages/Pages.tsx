import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import LittleGames from './components/LittleGames/LittleGames';
import './Pages.scss';

const Pages = () =>{

  return (
     <><Home active='inactive' />
      <About active='inactive' />
      <Resume active ='inactive' />
      <Contact active ='inactive' />
      <Blog active = 'inactive' />
      <LittleGames active = 'active' />
      <div className="snowEffect"></div>
      </>
  )
}

export default Pages;