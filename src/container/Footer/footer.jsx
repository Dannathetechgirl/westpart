import React from "react";
import './footer.scss'

function Footer() {
    return (
        <div className="app__footer">
            <div className="app__footer-text">
                <p className="app__flex-text"> 400 Bluegrass,</p>
                <p className="app__flex-text"> Ottawa, </p>
                <p className="app__flex-text"> Canada.</p>

            </div>
            <p className="app__footer-copy">@Copyright reserved 2023</p>
        </div>
    )
}

export default Footer