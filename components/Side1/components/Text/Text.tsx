import React from 'react';
import './Text.scss';

const Text = ()=>{
   return <div className="side1Container__part2">
    <div className="details">
        <h3 className="details__h3">Title</h3>
        <p className="details__p">Java Web Developer</p>
    </div>
    <div className="details">
      <h3 className="details__h3">Status</h3>
      <p className="details__p">Available</p>
  </div>
  <div className="details">
      <h3 className="details__h3">Location</h3>
      <p className="details__p">Melbourne, VIC</p>
  </div>
  <div className="details">
      <h3 className="details__h3">Email</h3>
      <p className="details__p">darcyxianau@gmail.comm</p>
  </div>
  <div className="details">
      <h3 className="details__h3">Website</h3>
      <p className="details__p"><a className="details__a" href="http://www.darcyxian.com">www.darcyxian.com</a> </p>
  </div>
</div>
}

export default Text;