import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Categories.css';

const Categories = () => {
    const { ref, inView } = useInView({
        threshold: 0.2 // Trigger animation when 20% of the element is visible
    });

    return (
        <section className='categories' ref={ref} id='categories'>
            <h2 className='categories-heading'>Our Categories</h2>
            <div className='category-container'>
                <motion.div className="category-card" initial={{ opacity: 0, y: -50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
                    <img src="https://source.unsplash.com/random/1920x1080/?home" alt="HomeDecor" />
                    <h3>HomeDecor</h3>
                </motion.div>

                <motion.div className="category-card" initial={{ opacity: 0, y: -50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
                    <img src="https://source.unsplash.com/random/1920x1080/?jewellery" alt="Jewellery" />
                    <h3>Jewellery</h3>
                </motion.div>

                <motion.div className="category-card" initial={{ opacity: 0, y: -50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
                    <img src="https://source.unsplash.com/random/1920x1080/?sweets,food" alt="FoodItems" />
                    <h3>Food Items</h3>
                </motion.div>

                <motion.div className="category-card" initial={{ opacity: 0, y: -50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
                    <img src="https://source.unsplash.com/random/1920x1080/?clothes" alt="Clothes" />
                    <h3>Clothes</h3>
                </motion.div>

                <motion.div className="category-card" initial={{ opacity: 0, y: -50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
                    <img src="https://source.unsplash.com/random/1920x1080/?gifts" alt="Gifts" />
                    <h3>Gifts</h3>
                </motion.div>

                <motion.div className="category-card" initial={{ opacity: 0, y: -50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
                    <img src="https://source.unsplash.com/random/1920x1080/?handicraft" alt="Handicraft" />
                    <h3>Handicraft</h3>
                </motion.div>
            </div>
        </section>
    );
};

export default Categories;
