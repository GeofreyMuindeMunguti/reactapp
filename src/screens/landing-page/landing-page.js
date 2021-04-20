import React from 'react';
import './landing-page.css';

import colors from "../../res/colors";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import profile_image from '../../res/images/profile.png';
import { faBookMedical, faCoffee } from '@fortawesome/free-solid-svg-icons';


const facebook_icon = <FontAwesomeIcon icon={faFacebookF} color={colors.primaryColor} />
const linkedin_icon = <FontAwesomeIcon icon={faLinkedinIn} color={colors.primaryColor}/>
const github_icon = <FontAwesomeIcon icon={faGithub} color={colors.primaryColor}/>
const coffee_icon = <FontAwesomeIcon icon={faCoffee} size={"2x"} color={colors.primaryColor} />
const book_icon = <FontAwesomeIcon icon={faBookMedical} size={"2x"} color={colors.primaryColor} />

class LandingPage extends React.Component {

    render () {
        return (
            <div>
            <div className="main">
                <div className="first">
                    <div className="socials">
                        <div className="icon">
                            {facebook_icon}
                        </div>
                        <div className="icon">
                           {linkedin_icon}
                        </div>
                        <div className="icon">
                            {github_icon}
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
                            Some description text about myself will go in here <br/>
                            In this section and will be followed by some action buttons
                        </h5>
                    </div>

                    <div className="actions">
                        <div className="cv">
                            <button>
                                Download CV
                            </button>
                        </div>
                        <div className="contact">
                            <button>
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
                            <h2 className="title">Python</h2>
                            <h5 className="desc">Description text goes in here <br/>
                            and continues here.</h5>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="icon">
                            {book_icon}
                        </div>
                        <div className="description">
                            <h2 className="title">Java</h2>
                            <h5 className="desc">Description text goes in here <br/>
                            and continues here.</h5>
                        </div>
                    </div>
                    <div className="skill">
                        <div className="icon">
                            {coffee_icon}
                        </div>
                        <div className="description">
                            <h2 className="title">Golang</h2>
                            <h5 className="desc">Description text goes in here <br/>
                            and continues here.</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="about">
                <div className="about-us">
                     
                </div>
                <div className="description">

                </div>
            </div>
            </div>
        )
    }
}

export default LandingPage;