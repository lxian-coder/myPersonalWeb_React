import React from 'react';
import './Home.scss';


const Home = (props:{active:string}) => {
    let className:string = 'backgroundPicture';
    if(props.active === 'active'){
     className += ' pageActive';
     console.log({className});
     
    }


    return  <div className={className}>
  <div className='homeBodyContainer'>
    <div className="homepart1">
        <p className="text ">Hi there I am</p>
        <h1 className="text hometitle">DARCY XIAN</h1>
        <p className="text">Java Web Developer</p>
    </div>
    <a className="text vcardLink" href="./aboutMe.html">
        <div className=" vcardbutton">
            <div className="vcardText"> <div className="vcardText2">Vcard Style</div> </div>
        </div>
    </a>
</div>

    </div> 
    
  
}

export default Home;