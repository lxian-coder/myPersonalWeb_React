import React from 'react';
import './ResumeSide2.scss';
import Side2 from '../../../../../Side2/Side2';
import ResumeItem from './components/ResumeItem/ResumeItem'
import ResumeEdu from './components/ResumeEdu/ResumeEdu';

const PROJECT = [{
       key:'2',
       title: 'SeaLife Restaurant (personal project)',
       description:"I developed this web application for a small business owner of Tasmania to display his restaurant and attract more consumers. The web includes 2 parts: the website part for customers and the dashboard for the restaurant owner.",
       href:"https://sealiferestaurantbicheno.com/#/",
       techUsed:"ReactJs 17, Typescript 4.0, Webpack, HTML5, CSS3, Styled component, Flexbox, React Router, Axios, AWS(S3, route53)",
},{
    key:'3',
    title:'Sealife Restaurant Dashboard (personal project)',
    description:'The restaurant owner and staff can log into the dashboard with different authority access and the owner can maintain the staff role account.',
    href:'http://dashboard.sealiferestaurantbicheno.com/#/',
    techUsed:'Java 11, Spring boot 5, Hibernate, H2 Database, PostgreSQL, Lombok, Flyway, docker, Junit, Mokito, Gradle, JWT token, Java security.',
},{
    key :'1',
    title:'ANZ Bank TPP Application',
    description:'I am working on an ANZ bank project as a full-stack developer(Typescript, JAVA).This project is a part of the bank\'s big system. Different transaction messages from upstream are received, processed, and sent downstream by this application. It is also responsible for analyzing response messages from downstream and then either doing the closing operations, processing them further, or reporting to upstreams. UI and restful APIs are also provided for authorized inside users to manipulate data or step into the message process. The whole project is mainly based on Java and Springboot.',
    href:"",
    techUsed:'Java 8, SpringBoot 1.5.10, Hibernate, Oracle DB, Maven, Lombok 1.18.20, JPA, JPQL, restFul API, Mockito 3.12.1, JUnit3/4, Active MQ, postman',
},]

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
