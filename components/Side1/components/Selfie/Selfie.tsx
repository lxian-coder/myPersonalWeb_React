import React from 'react';
import './Selfie.scss';
   import selfieFinal from '../../../../assets/selfieFinal.png';

import github from '../../../../assets/github.png';

import facebook from '../../../../assets/facebook.png';

import linkedin from '../../../../assets/linkedin.png';

import twitter from '../../../../assets/twitter.png';
const Selfie =() => {
   return    <div className="sid1Container__part1">
    <img className="side1Container__part1__img" src={selfieFinal} alt="sedlfie"></img>
    <ul className="side1Container__part1__icons">
        <li className="icon"><a href="https://github.com/lxian-coder"><img className="iconP" src={github} alt="github"></img></a></li>
        <li className="icon"><a href="https://www.linkedin.com/in/darcy-xian/"><img className="iconP" src={linkedin} alt="linkedin"></img></a></li>
        <li className="icon"><a href="https://www.facebook.com/darcy.xian.31"><img className="iconP" src={facebook} alt="facebook"></img></a></li> 
      <li className="icon"><a href=""><img className="iconP" src={twitter} alt="twitter"></img></a></li>
    </ul>
</div>
}

export default Selfie;