import React from 'react';
import './ResumeEdu.scss';
import UTASlogo from '../../../../../../../../assets/UTasLogo.png';

const ResumeEdu = ()=>{
 return <div>
 <h2 className="party2__body__title2">MY <span className="part2__body__h2">EDUCATION</span>
 <span className="part2__body__shadowtext1">EDUCATION</span> 
</h2>
<hr className="hrLine"></hr>

 <div className="entryContainer lastEntry">
     <div className="entry ">
         <div className="education">
             <div>
                 <h4 className="entry__h4" >Master of Information Technology and Systems</h4>
                 <div className="entry__schoolBlock">
                     {/* <p className="entry__schoolTime">02/2017 - 12/2019</p> */}
                     <p className="entry__school">(UTAS)University of Tasmania</p>
                 </div>
                <p  className="entry__p">"Mauris magna sapien, pharetra consectetur fringilla vitae, interdum sed tortor....etc"</p>
             </div>
             <div>
                 <img className="entry__img" src={UTASlogo} alt="UTASLogo"></img>
             </div>
         </div>
     </div>
      <div><p className="seemore"> <a className="seemore__a" href="https://www.linkedin.com/in/darcy-xian-9b8300198/">SEE MORE...</a> </p></div>
 </div>
 </div>

}

export default ResumeEdu;