import React from 'react';
import Item from './components/Item/Item';
import './Navbar.scss'
import {PAGE} from '../../../../constraints';

const ITEMS = [{
        href: PAGE.HOME,
        text: 'Home',
},{
        href: PAGE.ABOUT,
        text: 'About',  
},{
        href: PAGE.RESUME,
        text: 'Resume',
},{
        href: PAGE.CONTACT,
        text: 'Contact',
},{
        href: PAGE.BLOG,
        text: 'Blog',
},{
        href: PAGE.LITTLEGAMES,
        text: 'LittleGames',   
}]

const Navbar = ()=>{
     
return <div className='navbar'>
        {ITEMS.map((item) => (
                <Item href={item.href}>{item.text}</Item>
        ))}
       </div>
}

export default Navbar;