import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import LittleGames from './components/LittleGames/LittleGames';
import './Pages.scss';
import {PAGE} from '../../constraints';
import DrumGame from './components/DrumGame/DrumGame';
import SimonGame from './components/SimonGame/SimonGame';

const Pages = (props:{currentPage:string,drumGame:boolean, changePage:any, drumGameStart:any}) => {

  return (
     <><Home active = {props.currentPage === PAGE.HOME} onClick={()=>props.changePage(PAGE.ABOUT)}  />
      <About active={props.currentPage === PAGE.ABOUT} />
      <Resume active ={props.currentPage === PAGE.RESUME} />
      <Contact active ={props.currentPage === PAGE.CONTACT} />
      <Blog active = {props.currentPage === PAGE.BLOG} />
      <LittleGames active = {props.currentPage === PAGE.LITTLEGAMES} 
        onClick={()=>props.changePage(PAGE.DRUMGAME)}
        onClick2={()=>props.changePage(PAGE.SIMONGAME)} />
      <DrumGame  active = {props.currentPage === PAGE.DRUMGAME} onClick={()=>props.drumGameStart(true)} drumGame={props.drumGame}/>
      <SimonGame  active = {props.currentPage === PAGE.SIMONGAME} />
      </>
  )
}

export default Pages;