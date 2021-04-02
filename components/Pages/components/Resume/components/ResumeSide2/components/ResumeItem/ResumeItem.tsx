import React from 'react';
import './ResumeItem.scss';

const ResumeItem = (props:{
    title:string,
    description:string,
    href:string,
    techUsed:string,
}) => {
return  <div className="entry">
     <h4 className="entry__h4"> <a className="entry__a" href={props.href}>{props.title}</a></h4>
     <p  className="entry__p">{props.description}
     <br></br><br></br><b>Technique used: </b>{props.techUsed}
     </p>
     </div>

}
export default ResumeItem;