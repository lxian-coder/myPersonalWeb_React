import React from 'react';
import './DrumGame.scss';
import PageActive from '../PageActive/PageActive';
import tom1 from './sounds/tom-1.mp3';
import tom2 from './sounds/tom-2.mp3';
import tom3 from './sounds/tom-3.mp3';
import tom4 from './sounds/tom-4.mp3';
import snare from './sounds/snare.mp3';
import crash from './sounds/crash.mp3';
import kick_bass from './sounds/kick-bass.mp3';


const DrumGame = (props:{active:boolean,onClick:any,drumGame:boolean}) => {

let classNameButton = "set";
let classNamePress = '';
if(props.drumGame){
    classNameButton += " show";
    classNamePress += 'nonShow';
}



const gameStart = ()=>{
      
    
     
  // Detecting Button Press
// 遍历每个durm
for(let i = 0; i< document.querySelectorAll(".drum").length; i++){
    // handleClick 在这里不加（） 
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function () { 
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML); 
        buttonAnimation(buttonInnerHTML);
    })
    }
    console.log(document.querySelectorAll('.drum').length);
    //Detecting Keyboard Press
    document.addEventListener("keydown", function (event) {
        makeSound(event.key);
        buttonAnimation(event.key);
      });
      function makeSound (key:string) {
        switch(key){
     
            case "w":
                let audioW = new Audio(tom1);
                audioW.play();
                break;
            case "a":
                let audioA = new Audio(tom2);
                audioA.play();
                break;
            case "s":
                let audioS = new Audio(tom3);
                audioS.play();
                break;
            case "d":
                let audioD = new Audio(tom4);
                audioD.play();
                break;       
            case "j":
                let audioJ = new Audio(snare);
                audioJ.play();
                break;
            case "k":
                let audioK = new Audio(crash);
                audioK.play();
                break;
            case "l":
                let audioL = new Audio(kick_bass);
                audioL.play();
                break;        
            default: console.log();     
        }   
      }
    
      function buttonAnimation(currentlyKey:any) {
        
        let activeButton =  document.querySelector("." + currentlyKey);
        activeButton.classList.add("pressed")
        setTimeout(function(){
          activeButton.classList.remove("pressed"); }, 100);
    }

}
    let className = 'defaultBg';
    if(props.active){
         className += ' DrumGameBg'
    }
    
return   <PageActive className= {className} >
                <section className="homeBodyContainer gamesContainer drumSection">
            <h1 id="drumh1">Drum 🥁 Kit</h1>
            <p id='drumh1' className={classNamePress} onClick={(evt)=>{
                evt.preventDefault();
                gameStart();
                props.onClick();
            }}>Press here to start</p>
           <div className={classNameButton}>
             <button className="w drum">w</button>
            <button className="a drum">a</button>
            <button className="s drum">s</button>
            <button className="d drum">d</button>
            <button className="j drum">j</button>
             <button className="k drum">k</button>
             <button className="l drum">l</button>
            </div>
          </section>
                <div className="snowEffect"></div>
            </PageActive>
}

export default DrumGame;