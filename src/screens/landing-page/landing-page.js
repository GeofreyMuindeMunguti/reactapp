import React from 'react';
import './landing-page.css';

import colors from "../../res/colors";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'



import profile_image from '../../res/images/profile.png';
import pp_image from '../../res/images/pp.png';
import godigial from "../../res/images/godigital.png";
import adnest from "../../res/images/adbest.png";
import bcp from "../../res/images/bcp.png";
import lean from "../../res/images/lean.png"

import { faBookMedical, faCamera, 
    faCoffee, faGamepad, faHouseUser, 
    faMailBulk, faMusic, 
    faPhone, faUser } 
from '@fortawesome/free-solid-svg-icons';

import ProgressBar from 'react-percent-bar';

const facebook_icon = <FontAwesomeIcon icon={faFacebookF} color={colors.facebook_blue} />
const linkedin_icon = <FontAwesomeIcon icon={faLinkedinIn} color={colors.linkedin_blue}/>
const github_icon = <FontAwesomeIcon icon={faGithub} color={colors.dark}/>
const coffee_icon = <FontAwesomeIcon icon={faCoffee} size={"2x"} color={colors.primaryColor} />
const book_icon = <FontAwesomeIcon icon={faBookMedical} size={"2x"} color={colors.primaryColor} />

const person_icon = <FontAwesomeIcon icon={faUser} color={colors.primaryColor} />
const phone_icon = <FontAwesomeIcon icon={faPhone} color={colors.primaryColor} />
const email_icon = <FontAwesomeIcon icon={faMailBulk} color={colors.primaryColor} />
const music_icon = <FontAwesomeIcon size={"20px"}  icon={faMusic} color={colors.primaryColor} />
const travel_icon = <FontAwesomeIcon icon={faHouseUser} color={colors.primaryColor} />
const game_icon = <FontAwesomeIcon icon={faGamepad} color={colors.primaryColor} />
const photo_icon = <FontAwesomeIcon icon={faCamera} color={colors.primaryColor} />


const skills = [{
    name: "python",
    rate: 90,
},{
    name:"java",
    rate: 85,
},{
    name: "javascript",
    rate: 90,
},{
    name: "html",
    rate: 95,
},{
    name: "css",
    rate: 80,
},{
    name:"Go",
    rate: 70
}]

const extra_skills = [
    {name:"CI/CD", rate: 90},
    {name: "Automation Testing" , rate: 70},
    {name: "System Design", rate: 80},
    {name: "Microservice Architecture", rate: 85},
    {name: "Server management" , rate: 70},
    {name: "Product development Management" ,rate: 70},

]

const previous_works = [
    {
        image: godigial, 
        name: "Godigital", 
        desc: "A remote working system targeted to improve the employment problem in Africa, currently in use in Uganda.",
        timeframe: "July 2018-September 2019",
        link: "/"
    },

    {
        image: adnest, 
        name: "Adnest Advertising Platform",
        desc: "An advertisment ops platform to view advertising spaces, request an advertisment spot and monitor ROI.",
        timeframe: "January 2020-May 2020",
        link: "/"
    },
    {
        image: bcp, 
        name: "Tactive Business Continuity Planning System",
        desc: "A BCP(Business Continuity Planning) platform to enable SME enabler easily do threat analysis of their SMEs and anticipate problems in advance.",
        timeframe: "April 2020-August 2020",
        link: "/"
    },
    {
        image: lean, 
        name: "Lean Meals",
        desc: "A meal planning app that helps people feed responsibly, by knowing which nutrients their bodies need, getting meal recommendations and doing meal planning.",
        timeframe: "April 2020-August 2020",
        link: "/"
    }
]


function contact(){
    console.log("Contact");
    window.location.href = 'tel:+254711421684'; 
}

function linkedinCv(){
    console.log("donwload CV")
    window.open('https://www.linkedin.com/in/geofrey-munguti-068235117/', "_blank"); 
}

class LandingPage extends React.Component {
    
    componentDidMount(){
        document.title = "Muinde Geofrey Munguti";
    }

    render () {
        return (
            <div>
            <div className="main">
            
                <div className="first">
                    <div className="socials">
                        <div className="icon">
                            <a href="https://www.facebook.com/geoffrey.munguti.14/">{facebook_icon}</a>
                        </div>
                        <div className="icon">
                        <a href="https://www.linkedin.com/in/geofrey-munguti-068235117/">{linkedin_icon}</a>
                        </div>
                        <div className="icon">
                        <a href="https://github.com/GeofreyMuindeMunguti">{github_icon}</a>
                        </div>
                        <div className="icon">
                        
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="info">
                        <h4 className="hey">
                            Hi, I am
                        </h4>
                        <h2 className="name">
                            Muinde Geofrey
                        </h2>
                    </div>
                    <div className="job">
                        <h3 className="title">Software Engineer</h3>
                        <h5 className="description">
                            With 3 years experience in the Industy so far, I am passionate <br/>
                            about impacting the society by playing a role in solving <br/>
                            some of the problems we experience today using technology.
                        </h5>
                    </div>

                    <div className="actions">
                        <div className="cv">
                            <button onClick={linkedinCv}>
                                Linkedin CV
                            </button>
                        </div>
                        <div className="contact">
                            <button onClick={contact}>
                                Contact Me  
                            </button>
                        </div>
                    </div>
                </div>
                <div className="third">
                    <img src={profile_image} alt="Geofrey-Profile"></img>
                </div>
            </div>
            <div className="stats">
                <div className="skills">
                    <div className="skill">
                        <div className="icon">
                            {coffee_icon}
                        </div>
                        <div className="description">
                            <h2 className="title">3 Years</h2>
                            <h5 className="desc">In the Industry.</h5>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="icon">
                            {book_icon}
                        </div>
                        <div className="description">
                            <h2 className="title">8+ Projects</h2>
                            <h5 className="desc">In Production.</h5>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="icon">
                            {coffee_icon}
                        </div>
                        <div className="description">
                            <h2 className="title">5+ Mentees</h2>
                            <h5 className="desc">Working Collegues.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="about-me">
                     <img src={pp_image} alt="Muinde Geofrey"></img>
                </div>
                <div className="description">
                    <h4 className="title">My Intro</h4>
                    <div className="text">
                        <h2 className="heading">About Me</h2>
                        <p className="desc">Enthusiastic software engineer with adequate experience 
                            in the whole software development lifecycle of 
                            successful technology solutions. Learned to lead a 
                            team of skilled developers in efficient and 
                            effective collaboration to develop and release 
                            software systems that deliver on their intended 
                            purpose. A lover of technology with interest in 
                            not only learning and expounding on my technical 
                            skills but also creating new technologies and 
                            participating in open sourced projects aimed at 
                            making great technologies available for free to 
                            those who need them. 
                        </p>
                        <p></p>
                    </div>

                    <div className="bio">
                        <div className="name">
                            <div className="icon">
                                <div className="icon">{person_icon}</div> 
                                <div className="name">Name :</div>
                            </div>
                            <div>Muinde Geofrey</div>
                        </div>

                        <div className="name">
                            <div className="icon">
                                <div className="icon">{phone_icon}</div> 
                                <div className="name">Phone :</div>
                            </div>
                            <div>(+254) 711 421 684</div>
                        </div>


                        <div className="name">
                            <div className="icon">
                                <div className="icon">{email_icon}</div> 
                                <div className="name">Email :</div>
                            </div>
                            <div>muindegeofrey@gmail.com</div>
                        </div>


                    </div>


                    <div className="interests">
                        <h4 className="heading">My Interests</h4>
                        <div className="list">
                            <div className="icon">
                                {music_icon}
                                <div className="text">Music</div>
                            </div>

                            <div className="icon">
                                {travel_icon}
                                <div className="text">Travel</div>
                            </div>


                            <div className="icon">
                                {game_icon}
                                <div className="text">Gaming</div>
                            </div>


                            <div className="icon">
                                {photo_icon}
                                <div className="text">Photography</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="skillset">
                <h6 className="why-me">Why Choose Me</h6>
                <h5 className="my-skills">
                    My Expertise Areas
                </h5>
                <div className="visualization">
                    <div className="right">
                    {skills.map((skill, _)=> {
                        return (
                        <div className="language">
                            <div className="text">
                                <div>
                                    {skill.name}
                                </div>
                                <div>
                                    {skill.rate}%
                                </div>
                            </div>
                            <ProgressBar fillColor="orange" borderColor="orange" width="250%" height="10px" radius="0px" percent={skill.rate} />
                        </div>
                    )})}
                    </div>
                    
                    <div className ="middle">

                    </div>

                    <div className="right">
                    {extra_skills.map((skill, _)=> {
                        return (
                        <div className="language">
                            <div className="text">
                                <div>
                                    {skill.name}
                                </div>
                                <div>
                                    {skill.rate}%
                                </div>
                            </div>
                            <ProgressBar fillColor="orange" borderColor="orange" width="250%" height="10px" radius="0px" percent={skill.rate} className="progress-bar"/>
                        </div>
                    )})}
                    </div>
                </div>
            </div>

            <div className="previous-works">
                <h6 className="previously">A view of my craftmanship</h6>
                <h5 className="title">My Previous Works</h5>

                <div className="grid">
                    {previous_works.map((work, _)=> {
                        return (
                            
                            <div className="item">
                                <img className="thumbnail" src={work.image} alt={work.name}/>
                                <div className="text">
                                    <p className="timeframe">{work.timeframe}</p>
                                    <p className="description">{work.desc}</p>
                                    <p><a href={work.link}>{work.name}</a></p>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>

            <div className="contact-me">
                    
            </div>

            <div className="footer">
                <p>Designed By Muinde Geofrey</p>
                <p>2021</p>
            </div>
            </div>
        )
    }
}

export default LandingPage;