import React from 'react';
import './Item.scss';

const Item = (props:{
    src: string,
    skill: any,
})=>{
    return    <div className="skillIcons__wrapper" >
    <img className="skillIcons__wrapper__loaded"  alt="HTML" src={props.src}></img>
    <p className="skillIcons__wrapper__description">{props.skill}</p>
   </div>
}

export default Item;