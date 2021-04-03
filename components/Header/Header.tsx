import React from 'react';
import Navbar from './components/Navbar/Navbar'
import MyName from './components/Navbar/MyName/MyName'
import './Header.scss'
import Button from './components/Navbar/Button/Button';

const Header =(props:{changePage:any, currentPage:string}) =>{
      
   

    return   <div className='headerContainer '>
             <div className='headerContainer__content'> 
             <MyName />
             <Button  />
             <Navbar currentPage={props.currentPage} changPage={props.changePage} ></Navbar>
             </div>
             </div>

}
export default Header;

