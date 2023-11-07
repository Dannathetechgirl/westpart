import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { motionWrapper, appWrapper } from "../../wrapper";
import './doctor.scss';
import { urlFor, client } from '../../client';

const Doctor = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "doc"]';
        client.fetch(query)
            .then((data) => {
                console.log('Data received:', data)
                setAbouts(data);
            })
            .catch(error => {
                console.error("Sanity fetch error:", error);
            });
    }, []);

    return (
        <>
            <h2 className="app__text head-text"> Meet <br /> Our <span>Doctors</span></h2>

            <div className="app__profiles">
                {abouts.map((doctor, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={doctor.imgUrl + index}
                    >
                        <img src={urlFor(doctor.imgUrl)} alt={doctor.title} style={{ width: '190px', height: '290px' }} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{doctor.title}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{doctor.certification}</p>
                        <p className='p-text-word'>{doctor.specialty}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default appWrapper(
    motionWrapper(Doctor, 'app__about'),
    'doctors',
    'app__whitebg',
);