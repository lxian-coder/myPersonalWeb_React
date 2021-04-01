import React from 'react';
import './Item.scss';

const Item = (props:{ href: string, children: string, }) => {


    return <a  className='items' href={props.href}>{props.children}</a>

}

export default Item;