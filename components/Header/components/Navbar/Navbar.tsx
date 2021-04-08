import React from 'react';
import Item from './components/Item/Item';
import './Navbar.scss'
import {PAGE} from '../../../../constraints';

const ITEMS = [{
        key : 'home',
        currentPage: PAGE.HOME,
        text: 'Home',
},{
        key : 'about',
        currentPage: PAGE.ABOUT,
        text: 'About',
},{
        key : 'resume',
        currentPage: PAGE.RESUME,
        text: 'Resume',
},{
        key : 'contact',
        currentPage: PAGE.CONTACT,
        text: 'Contact',
},{
        key : 'blog',
        currentPage: PAGE.BLOG,
        text: 'Blog',
},{
        key : 'littlegames',
        currentPage: PAGE.LITTLEGAMES,
        text: 'LittleGames',
}]

const Navbar = (props:{changPage:any, currentPage:string,dropMenu:boolean, toggelDropMenu:(dropMenu:boolean)=>void})=>{

let className = 'navbar';
if(props.dropMenu){
        className += ' dropMenuShow'
}

return <div className={className}>
        {ITEMS.map((item) => (
                <Item 
                 active={props.currentPage === item.currentPage}  
                 key={item.key} 
                 onClick={()=>{
                         props.changPage(item.currentPage);
                         props.toggelDropMenu(false);
                        }}
                 >{item.text}</Item>
        ))}
       </div>
}

export default Navbar;