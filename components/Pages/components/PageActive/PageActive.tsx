import React from 'react';
import './PageActive.scss';


const PageActive = (props:{children:any,className:string}) => {

    return <div className={props.className}>
           <div className='container'>
              {props.children}
           </div>
          </div>
}

export default PageActive;