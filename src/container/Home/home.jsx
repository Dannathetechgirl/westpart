import React from "react";
import { image } from '../../constants'
import './section.scss'
import { appWrapper } from "../../wrapper";


function Home() {
    return (
        <div className="app__section-container">
            <div className="app__section-cardbox">
                <div className="app__section-card">
                    <h1 className="app__header p-text-header">Welcome to Westpark Medical Clinic & Walk-In</h1>
                    <p className="app__info p-text-word">At Westpark Medical Clinic we work tirelessly to provide excellent patient based care. We are a medical home that try to make patient feel at home. We have a team of trained professionals including Physicians, Chronic disease nurse and Mental health therapist who supports us from the PCN and excellent Medical Office Assistants. At every visit, our patients are listened to, cared for, and are provided quality care delivery. We are grateful for the opportunity to care for you and your family.</p>
                    <p className="app__info p-text-word">Our services include: </p>
                    <ul className="app__service-lists p-text-word" >
                        <li>Family practice</li>
                        <li>Women's health care</li>
                        <li>WCB</li>
                        <li>Drivers medical exam</li>
                        <li>Care of the elderly</li>
                        <li>Pediatric care</li>
                    </ul>
                </div>
                <button className="app__button "> <a
                    href="https://ocean.cognisantmd.com/intake/patients.html?linkRef=8974d371-058b-4c4c-8074-ef154a40ef5f#/online-booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none', color: 'white' }}
                >Schedule an appointment</a></button>
            </div>
            <div className="app__section-image">
                <img src={image.background} alt="doctors" />
            </div>

        </div>
    )
}

export default appWrapper(Home, 'home')