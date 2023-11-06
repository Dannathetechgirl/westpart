import React, { useState } from 'react'
import './navbar.scss'
import { image } from '../../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes as faClose, faBars as faMenu } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';



function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={image.logo} alt='logo' />
            </div>
            <ul className='app__navbar-links'>
                {['home', 'doctors', 'about',].map((item) => (
                    <li className='app__flex p-text-word' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
                <li className="app__flex p-text-word" key="link-ocean-app">
                    <div />
                    <a href="https://ocean.cognisantmd.com/online-booking/8974d371-058b-4c4c-8074-ef154a40ef5f" target="_blank" rel="noopener noreferrer">Book an Appointment</a>
                </li>
            </ul>
            <div className='app__navbar-menu'>

                {isMenuOpen ? (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                        className='app__hamburger-motion'
                    >

                        <FontAwesomeIcon icon={faClose} onClick={handleToggle} className="app__HiX" />


                        <ul>
                            {['Home', 'doctors', 'about',].map((item) => (
                                <li key={item}>
                                    <div />
                                    <a onClick={() => setIsMenuOpen(false)} href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                            <li className="app__flex p-text" key="link-ocean-app">
                                <div />
                                <a href="https://ocean.cognisantmd.com/online-booking/8974d371-058b-4c4c-8074-ef154a40ef5f" target="_blank" rel="noopener noreferrer">Book an appointment</a>
                            </li>
                        </ul>
                    </motion.div>
                ) : (
                    <FontAwesomeIcon icon={faMenu} onClick={handleToggle} className="app__icon" />
                )}
            </div>

        </nav>
    );
}

export default Navbar


