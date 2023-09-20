import React from "react";
import { image } from '../../constants'
import './section.scss'
import { appWrapper } from "../../wrapper";

function Home() {
    return (
        <div className="app__section-container">
            <div className="app__section-cardbox">
                <div className="app__section-card p-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <button className="app__button ">Schedule an appointment</button>
            </div>
            <div className="app__section-image">
                <img src={image.background} alt="doctors" />
            </div>

        </div>
    )
}

export default appWrapper(Home, 'home')