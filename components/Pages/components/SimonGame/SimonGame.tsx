import React from 'react';
import './SimonGame.scss';
import PageActive from '../PageActive/PageActive';
import $ from 'jquery';
import greenSound from './simonSounds/blue.mp3';
import redSound from './simonSounds/red.mp3';
import yellowSound from './simonSounds/yellow.mp3';
import blueSound from './simonSounds/blue.mp3';
import wrongSound from './simonSounds/wrong.mp3';


const SimonGame = (props:{active:boolean}) => {

const gameStart = () => {

    let buttonColours = ["red","blue","green","yellow"];
    let gamePattern:any = [];
    let userClickedPattern:any = [] ;
    let level = 0;
    // 控制 用户每一轮游戏的点击次数
    let clickTime = 0;
  
        if(level===0){ nextSequence(); }
 
    
    $(".btn").on("click",function(event){
            clickTime++;   
             let userClickedColor = event.target.id;
            playSound(userClickedColor);
            animatePress(userClickedColor);
            // store user's color in array
            userClickedPattern.push(userClickedColor);
            checkAnswer();
    });

    function checkAnswer() {
        if(userClickedPattern[clickTime-1] !== gamePattern[clickTime-1]){
            playSound("wrong");
            $("simonbody").css("background-color","red");
            setTimeout(function(){$("body").css("background-color","#011F3F");},100);
            $("#level-title").text("Game over, Press Any Ket to Restart");
            level = 0;
            clickTime = 0;
            gamePattern = [];
            userClickedPattern = [];
        }else {
            if(clickTime === level){
                clickTime = 0;
                userClickedPattern = [];
                nextSequence();
            }
        };
    }
    
    function nextSequence(){
        level++;
    
        console.log("cccccccc");
       $("#level-title").text("Level" + " "+level);
    
    // get random number between 0 - 3
    let randomNumber = Math.floor(Math.random() * 4);
    
    // using random number to select random color from array
    let randomChosenColour =  buttonColours[randomNumber];
    // add new randomChosenColour to the end of gamePattern array.
    gamePattern.push(randomChosenColour);
    
    
    //Use jQuery to select the button with the same id as the randomChosenColour
    //animate a flash to the button selected
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
    console.log("gamePattern:"+gamePattern);
    // play sound for the button color selected
    // be careful the sound can not play automatically, must keydown, click to trigger.
    // let aa = new Audio("sounds/"+ randomChosenColour+".mp3");
    // aa.play();
    playSound(randomChosenColour);
    }
    function animatePress(currentColor:any){
        $("#"+currentColor).addClass("pressed");
       setTimeout(function(){$("#"+currentColor).removeClass("pressed");},100);
    }

    function playSound(name:any){
        console.log(name);
        switch(name){
        case 'red':
            let aa = new Audio(redSound);
            aa.play();
            break;
        case 'yellow':
            let bb = new Audio(yellowSound);
            bb.play();
            break;
        case 'green':
            let cc = new Audio(greenSound);
            cc.play();
            break;
        case 'blue':
            let dd = new Audio(blueSound);
            dd.play();
            break;
        case 'wrong':
            let ee = new Audio(wrongSound);
            ee.play();
            break;
        }

    }
}

    let className = 'defaultBg';
    if(props.active){
         className += ' SimonGameBg'
    }

return      <PageActive className= {className} >
                <section className="simonbody gamesContainer" >
              <h1 id="level-title" onClick={()=>
                {
                 gameStart();
                }}>Press here to Start</h1>
          
                <div className="row">
                  <div id="green" className="btn green ">
                  </div>
                  <div id="red" className="btn red ">
                  </div>
                </div>
                <div className="row">
                  <div id="yellow" className="btn yellow ">
                  </div>
                  <div id="blue" className="btn blue ">
                  </div>
                </div>
             
            </section >
                <div className="snowEffect"></div>
            </PageActive>
}
export default SimonGame;
