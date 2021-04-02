import React from 'react';
import './AboutSide2.scss';
import AboutSkills from './components/AboutSkills/AboutSkills';
import AboutText from './components/AboutText/AboutText';
import Side2 from '../../../../../Side2/Side2';

const AboutSide2 = ()=>{
    return   <Side2>
               <AboutText />
               <AboutSkills />
           </Side2>
}

export default AboutSide2;