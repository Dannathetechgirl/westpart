import React from "react";
import './about.scss'
import { motionWrapper, appWrapper } from "../../wrapper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


function About() {



    return (
        <>
            <h2 className="app__text head-text"> Clinic <span> Information </span></h2>

            <div className="app__about-card-container">
                <div className="app__about-card">
                    <h4 className="app__about-title bold-text">Contact Us</h4>
                    <div className="app__about-content">
                        <FontAwesomeIcon icon={faPhone} color="#C41E3A" />
                        <span>(587) 457-9900</span>
                    </div>
                    {/* <div className="app__about-content">
                        <FontAwesomeIcon icon={faEnvelope} color="#5cb25d" />
                        <span>westparkmediclinic@gmail.com</span>
                    </div> */}

                </div>

                <div className="app__about-card">
                    <h4 className="app__about-title bold-text">Clinic Hours</h4>
                    <div className="app__about-content">
                        <h5 className="p-text">Monday - Friday </h5>
                        <span>9am - 5:30pm</span>
                    </div>
                    <div className="app__about-content">
                        <h5 className="p-text">Saturday</h5>
                        <span>10am - 2pm</span>
                    </div>


                </div>
            </div>
        </>

    )
}

export default appWrapper(motionWrapper(About, 'app__about'),
    'about'
)