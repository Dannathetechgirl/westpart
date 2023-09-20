import React from "react";
import './about.scss'
import { motionWrapper, appWrapper } from "../../wrapper";


function About() {



    return (
        <>
            <h2 className="app__text head-text"> Clinic <span> Information </span></h2>

            <div className="app__about-card-container">
                <div className="app__about-card">
                    <h4 className="app__about-title bold-text">Contact Us</h4>
                    <div className="app__about-content">
                        <h5 className="p-text">Phone Number </h5>
                        <span>0900000000</span>
                    </div>
                    <div className="app__about-content">
                        <h5 className="p-text">Email Address</h5>
                        <span>west@gmail.com</span>
                    </div>

                </div>

                <div className="app__about-card">
                    <h4 className="app__about-title bold-text">Clinic Hours</h4>
                    <div className="app__about-content">
                        <h5 className="p-text">Monday - Friday </h5>
                        <span>8am - 5pm</span>
                    </div>
                    <div className="app__about-content">
                        <h5 className="p-text">Saturday</h5>
                        <span>10am - 3pm</span>
                    </div>


                </div>
            </div>
        </>

    )
}

export default appWrapper(motionWrapper(About, 'app__about'),
    'about',

)