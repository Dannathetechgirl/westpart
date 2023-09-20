import React, { useState } from "react";
import './navbar.scss';
import { image } from '../../constants'

function Navbar() {



    return (
        <nav className="app__nav-bar">
            <div className="app__nav-bar-logo">
                <img src={image.logo} alt="westpark-logo" className="src" />
            </div>
            <ul className="app__nav-links">
                {['home', 'about'].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
                {/* Add the "ocean app" link */}
                <li className="app__flex p-text" key="link-ocean-app">
                    <div />
                    <a href="https://ocean.cognisantmd.com/online-booking/8974d371-058b-4c4c-8074-ef154a40ef5f" target="_blank" rel="noopener noreferrer">Ocean App</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar