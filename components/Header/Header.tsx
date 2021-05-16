import React from 'react';
import Navbar from './components/Navbar/Navbar'
import MyName from './components/Navbar/MyName/MyName'
import './Header.scss'
import Button from './components/Navbar/Button/Button';

const Header =(props:{changePage:any, currentPage:string, dropMenu:boolean,toggleDropMenu:(dropMenu:boolean)=>void}) =>{

    return   <header className='headerContainer '>
             <div className='headerContainer__content'> 
             <MyName />
             <Button toggleDropMenu={props.toggleDropMenu} dropMenu={props.dropMenu} />
             <Navbar currentPage={props.currentPage} changPage={props.changePage} dropMenu={props.dropMenu} toggelDropMenu={props.toggleDropMenu}></Navbar>
             </div>
             </header>

}
export default Header;

