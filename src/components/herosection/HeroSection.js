import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section className='homepage'>
            <motion.div className='header' initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5}}>
                <h1>Welcome to</h1>
                <img src="/logotransparent.png" alt="" />
            </motion.div>

            <motion.div className="home-nav" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
            <Link to="/homedecor" className="home-buttons button-91">
                    HomeDecor
            </Link>

            <Link to="/jewellery" className="home-buttons button-91">
                    Jewellery
            </Link>

            <Link to="/fooditems" className="home-buttons button-91">
                    Food Items
            </Link>

            <a href="#clothes" className="home-buttons button-91">
                    Clothes
            </a>
            </motion.div>
        </section>
    );
};

export default HeroSection;
