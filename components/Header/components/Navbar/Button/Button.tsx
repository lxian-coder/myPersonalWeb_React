import React from 'react';
import './Button.scss';
import Navbar from '../Navbar';
import { ProgressPlugin } from 'webpack';


const Button  = (props:{dropMenu:boolean, toggleDropMenu:any})=>{

    const changeDropMenu = () => {
       props.toggleDropMenu(!props.dropMenu);
    }
  
    return <div onClick={(evt)=>{
      evt.preventDefault;
      changeDropMenu();}} >
      <svg className="button" stroke="#black" fill="#black" stroke-width="0" viewBox="0 0 1024 1024" height="2.5rem" width="2.5rem" xmlns="http://www.w3.org/2000/svg">
       <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path> 
      </svg>
    </div>
}

export default Button;