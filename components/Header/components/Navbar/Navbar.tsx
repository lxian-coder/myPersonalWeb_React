import React from 'react';
import Item from './components/Item/Item';
import './Navbar.scss'
import {PAGE} from '../../../../constraints';

const ITEMS = [{
        key : 'home',
        href: PAGE.HOME,
        text: 'Home',
},{
        key : 'about',
        href: PAGE.ABOUT,
        text: 'About',  
},{
        key : 'resume',
        href: PAGE.RESUME,
        text: 'Resume',
},{
        key : 'contact',
        href: PAGE.CONTACT,
        text: 'Contact',
},{
        key : 'blog',
        href: PAGE.BLOG,
        text: 'Blog',
},{
        key : 'littlegames',
        href: PAGE.LITTLEGAMES,
        text: 'LittleGames',   
}]

const Navbar = ()=>{
     
return <div className='navbar'>
        {ITEMS.map((item) => (
                <Item key={item.key} href={item.href}>{item.text}</Item>
        ))}
       </div>
}

export default Navbar;