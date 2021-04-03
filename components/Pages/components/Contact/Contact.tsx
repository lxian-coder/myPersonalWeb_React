import React from 'react';
import './Contact.scss';
import Side1 from '../../../Side1/Side1';
import PageActive from '../PageActive/PageActive';
import ContactSide2 from './components/ContactSIde2/ContactSide2';
const Contact = (props:{active:boolean}) => {
    let className = 'defaultBg';
    if(props.active ){
         className += ' ContactBg'
    }
    
return      <PageActive className= {className} >
                <Side1 />
                <ContactSide2 />
                <div className="snowEffect"></div>
            </PageActive>
}
export default Contact;