import React from 'react';
import './LittleGames.scss';
import PageActive from '../PageActive/PageActive';


const LittleGames = (props:{active:boolean, onClick:any, onClick2:any}) => {
    let className = 'defaultBg';
    if(props.active){
         className += ' LittleGamesBg'
    }
    
return      <PageActive className= {className} >
               <section className="side2Container gamesContainer">
                <h2 className="party2__body__title2">LITTLE <span className="part2__body__h2">GAMES</span>
                    <span className="part2__body__shadowtext1">GAMES</span> 
                   </h2>
                   <hr className="hrLine"></hr>
                   <h2 onClick={(evt)=>{
                       evt.preventDefault();
                       props.onClick();
                   }} className="gameButton"> <a className="gameButton__a" >Drum Kit Game</a> </h2>
                   <h2 onClick={(evt)=>{
                       evt.preventDefault();
                       props.onClick2();
                   }}className="gameButton"><a className="gameButton__a" >Simon Game </a></h2>
            </section >
            <div className="snowEffect"></div>
            </PageActive>
}
export default LittleGames;
