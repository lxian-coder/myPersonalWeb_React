import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import LittleGames from './components/LittleGames/LittleGames';
import './Pages.scss';
import {PAGE} from '../../constraints';

const Pages = (props:{currentPage:string, changePage:any}) => {

  return (
     <><Home active = {props.currentPage === PAGE.HOME} onClick={()=>props.changePage(PAGE.ABOUT)}  />
      <About active={props.currentPage === PAGE.ABOUT} />
      <Resume active ={props.currentPage === PAGE.RESUME} />
      <Contact active ={props.currentPage === PAGE.CONTACT} />
      <Blog active = {props.currentPage === PAGE.BLOG} />
      <LittleGames active = {props.currentPage === PAGE.LITTLEGAMES} />
      </>
  )
}

export default Pages;