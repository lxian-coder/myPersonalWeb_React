import React from 'react';
import './ResumeSide2.scss';
import Side2 from '../../../../../Side2/Side2';
import ResumeItem from './components/ResumeItem/ResumeItem'
import ResumeEdu from './components/ResumeEdu/ResumeEdu';

const PROJECT = [{
       key :'1',
       title:'Spring Pet Clinic Web Application',
       description:'This is a multi-module Maven spring framework 5 application which can be used to manage Pet clinic data using a relational database.',
       href:"http://petclinic.ap-southeast-2.elasticbeanstalk.com/",
       techUsed:'Java, SpringBoot5, Hibernate, H2 Database, MySQL, Maven, MVC framework, Lombok, JPA, Mockito, JUnit, ThymeLeaf, CI/CD, AWS(RDS, Elastic Beanstalk)',
},{
       key:'2',
       title: 'Spring MVC REST Application',
       description:"This a Spring Framework 5 web application which allows users to search, update, delete, add and store recipes data and picture online.",
       href:"http://Springrecipe-env.eba-95k2immr.ap-southeast-2.elasticbeanstalk.com",
       techUsed:"Swagger 2.0, JAXB, MapStruct, Postman, Java, SpringBoot 5, Maven, Spring MVC,  CI/CD",
},{
    key:'3',
    title:'Spring MVC REST Application',
    description:'This is a multi-module java  back-end project where I create RESTFul API including GET, PUT, POST, PATCH, DELETE operations.',
    href:'http://restfull-swagger.ap-southeast-2.elasticbeanstalk.com/swagger-ui.html',
    techUsed:'Swagger 2.0, JAXB, MapStruct, Postman, Java, SpringBoot 5, Maven, Spring MVC,  CI/CD',
}]

const ResumeSide2 = ()=> {
    return <Side2>
    <h2 className="party2__body__title2">PROJECT <span className="part2__body__h2">EXPERIENCE</span>
      <span className="part2__body__shadowtext1">EXPERIENCE</span> 
     </h2>
     <hr className="hrLine"></hr>
     <div className="entryContainer">
        {
            PROJECT.map(({key,title,description,href,techUsed})=>
            <ResumeItem key={key} title={title} description={description} href={href} techUsed={techUsed}/>)
        }
         <div><p className="seemore"> <a className="seemore__a" href="https://github.com/lxian-coder">SEE MORE...</a> </p></div>
    </div>
    <ResumeEdu />

    </Side2>
    
}

export default ResumeSide2;
