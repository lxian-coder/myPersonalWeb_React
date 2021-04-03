import React from 'react';
import './About.scss';
import Side1 from '../../../Side1/Side1';
import AboutSide2 from './components/AboutSide2/AboutSide2';
import PageActive from '../PageActive/PageActive';

const About = (props:{active:boolean}) => {
    let className = 'defaultBg';
    if(props.active ){
         className += ' AboutBg'
    }

return      <PageActive className= {className} >
                <Side1 />
                <AboutSide2 />
                <div className="snowEffect"></div>
            </PageActive>
}
export default About;

