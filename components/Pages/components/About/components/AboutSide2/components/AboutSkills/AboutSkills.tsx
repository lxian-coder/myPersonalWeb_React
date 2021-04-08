import React from 'react';
import './AboutSkills.scss';
import Item from './components/Item/Item';

const FRONT_SKILLS = [{
    key:'html5',
    skill:'HTML5',
    src : "https://res.cloudinary.com/diliv19aw/image/upload/v1579436089/tsd586rwojjfmoqle05k.png",
},{
    key:'css3',
    skill:'CSS3',
    src : "https://res.cloudinary.com/diliv19aw/image/upload/v1579436102/lj4bnpncsk83imo2dfjo.png",
},{
    key:'sass',
    skill:'Sass',
    src : "https://res.cloudinary.com/diliv19aw/image/upload/v1579437039/izumicavrhpfmbwkmkm2.png",
},{
    key:'Bootstrap5',
    skill:'Bootstrap5',
    src : "https://res.cloudinary.com/diliv19aw/image/upload/v1579437280/xylrqwxwqbiv3c9js71e.png",
},{
    key:'Javascript',
    skill:'Javascript',
    src : "https://res.cloudinary.com/diliv19aw/image/upload/v1579436138/lkdksoy0h8b8abu17iwq.png",
},{
    key:'ES6',
    skill:'ES6',
    src : "https://res.cloudinary.com/diliv19aw/image/upload/v1582004559/won6djauvjyky0o6ihtb.png",
},{
    key:'Flexbox',
    skill:'Flexbox',
    src: "https://res.cloudinary.com/diliv19aw/image/upload/v1582004017/rby8tcsteuxuiqvghdr0.jpg"
},{
    key:'React.JS',
    skill:'React.JS',
    src: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436314/ygwv5ydrxktuysgbw0d2.svg"
}]

const BACK_SKILLS = [{
    key : 'Spring Boot 5',
    skill: 'Spring Boot 5',
    src: "https://res.cloudinary.com/diliv19aw/image/upload/v1579522336/ulzd9murtkzfiuozyqhy.png",
},{
    key : "MongoDB",
    skill: "MongoDB",
    src: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436847/dbb20kncfnrguc3lixt3.svg",
},{
    key : 'MySQL',
    skill: 'MySQL',
    src: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436617/atzr0qzxg4qxzd1ykoq7.svg",
},{
    key : 'RESTful API',
    skill: 'RESTful API',
    src: "https://res.cloudinary.com/diliv19aw/image/upload/v1579522427/j3hx2sgdvrxeel3wjqtj.svg",
},{
    key : 'Postman',
    skill: 'Postman',
    src: "https://res.cloudinary.com/diliv19aw/image/upload/v1582271397/vspmrrad4hwzyjjfglms.jpg",
},{
    key : 'Swagger',
    skill: 'Swagger',
    src: "https://res.cloudinary.com/diliv19aw/image/upload/v1582271494/lzuu2r2ghjwfs17dpo77.png",
},{
    key : 'Java 8/11',
    skill: 'Java 8/11',
    src: "https://res.cloudinary.com/diliv19aw/image/upload/v1579436768/iqzc8affehlxzlaivkgg.svg",
},{
    key : 'Docker',
    skill: 'Docker',
    src: "https://res.cloudinary.com/diliv19aw/image/upload/v1580737704/ahlzkeripgzqvyeatehr.svg",
},{
    key : 'AWS',
    skill: 'AWS',
    src: "https://res.cloudinary.com/diliv19aw/image/upload/v1579522919/pn6rpjmbakula9g56kbr.png",
},]

const TOOL = [{
    key:'Git',
    skill:'Git',
    src:"https://res.cloudinary.com/diliv19aw/image/upload/v1579437255/uhgogpchc9cpy0wa0ozy.svg",
},{
    key:'Agile',
    skill:'Agile',
    src:"https://res.cloudinary.com/diliv19aw/image/upload/v1579435622/gc2jifx8lbvi8rkxykcg.svg",
},]

const AboutSkills = ()=>{
    return <div className="side2Container__part2"  >
    <h2 className="party__body__title">SKILLS <span className="part2__body__h2">HIGHLIGHT</span>
<span className="part2__body__shadowtext2">SKILLS</span> </h2>
<div className="skillIcons">
    <div className="skillIcons__wrapper skillIcons__text">Front-End</div>
          <div className="skillsSVG">
          {FRONT_SKILLS.map(({key,skill,src})=>(
            <Item key={key} skill={skill}  src={src}  />
        ))}
          </div>

    <div className="skillIcons__wrapper skillIcons__text">Back-End</div>
   <div className="skillsSVG">
   {BACK_SKILLS.map(({key,skill,src})=>(
            <Item key={key} skill={skill}  src={src}  />
        ))}
   </div>

    <div className="skillIcons__wrapper skillIcons__text">Tool</div>
    <div className="skillsSVG">
    {TOOL.map(({key,skill,src})=>(
            <Item key={key} skill={skill}  src={src}  />
        ))}
    </div>
</div>
</div>
}

export default AboutSkills;
