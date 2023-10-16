import React, { useState } from 'react'
import './navbar.scss'
import { image } from '../../constants'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'


function Navbar() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={image.logo} alt='logo' />
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about',].map((item) => (
                    <li className='app__flex p-text' key={`link-${item}`}>
                        <div />
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
                <li className="app__flex p-text" key="link-ocean-app">
                    <div />
                    <a href="https://ocean.cognisantmd.com/online-booking/8974d371-058b-4c4c-8074-ef154a40ef5f" target="_blank" rel="noopener noreferrer">Ocean App</a>
                </li>
            </ul>
            <div className='app__navbar-menu'>
                {toggle ? (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                        className='app__hamburger-motion'
                    >
                        <HiX onClick={() => setToggle(false)} className='app__HiX' />
                        <ul>
                            {['Home', 'about'].map((item) => (
                                <li key={item}>
                                    <div />
                                    <a onClick={() => setToggle(false)} href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                            <li className="app__flex p-text" key="link-ocean-app">
                                <div />
                                <a href="https://ocean.cognisantmd.com/online-booking/8974d371-058b-4c4c-8074-ef154a40ef5f" target="_blank" rel="noopener noreferrer">Book an appointment</a>
                            </li>
                        </ul>
                    </motion.div>
                ) : (
                    <HiMenuAlt4 onClick={() => setToggle(true)} />
                )}
            </div>

        </nav>
    )
}

export default Navbar