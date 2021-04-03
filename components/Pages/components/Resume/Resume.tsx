import React from 'react';
import './Resume.scss';
import Side1 from '../../../Side1/Side1';
import PageActive from '../PageActive/PageActive';
import ResumeSide2 from './components/ResumeSide2/ResumeSide2';

const About = (props:{active:boolean}) => {
    let className = 'defaultBg';
    if(props.active){
         className += ' ResumeBg'
    }
    
return      <PageActive className= {className} >
                <Side1 />
                <ResumeSide2 />
                <div className="snowEffect"></div>
            </PageActive>
}
export default About;
