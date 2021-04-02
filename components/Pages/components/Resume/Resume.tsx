import React from 'react';
import './Resume.scss';
import Side1 from '../../../Side1/Side1';
import PageActive from '../PageActive/PageActive';
import ResumeSide2 from './components/ResumeSide2/ResumeSide2';

const About = (props:{active:string}) => {
    let className = 'defaultBg';
    if(props.active === 'active'){
         className += ' ResumeBg'
    }
    
return      <PageActive className= {className} >
                <Side1 />
                <ResumeSide2 />
            </PageActive>
}
export default About;
