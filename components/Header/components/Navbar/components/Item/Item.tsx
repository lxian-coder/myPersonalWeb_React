import React from 'react';
import './Item.scss';

const Item = (props:{ onClick:() => void
   , children: string, active:boolean}) => {
   
    let className = 'items';
   if(props.active){
       className += ' selected';
   }

    return <a onClick={(event)=>{
        event.preventDefault;
        props.onClick();
    }} className={className} >{props.children}</a>

}

export default Item;