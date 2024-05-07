import React from 'react';
import './OurStory.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OurStory = () => {
  const { ref, inView } = useInView({
    threshold: 0.2 // Trigger animation when 20% of the element is visible
});
  return (
    <div className="our-story" ref={ref}>
      <motion.h2 className="section-title" initial={{ opacity: 0, y: -50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>Our Story</motion.h2>
      <motion.div className="story-content" initial={{ opacity: 0, y: -50 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 1 }}>
        <p>Welcome to Madyantika, where creativity meets craftsmanship. Our journey began with a vision to redefine elegance and sophistication in every home.</p>
        <p>Driven by our passion for design, we curate exquisite collections that blend tradition with modernity, offering you timeless pieces that elevate your living space.</p>
        <p>With a focus on quality and authenticity, each item in our store tells a story of artistry and dedication. From handcrafted jewellery to artisanal home decor, we strive to bring you the finest selection of products that inspire and delight.</p>
        <p>Join us in celebrating the beauty of craftsmanship and the art of living well. Explore our collections and let Madyantika transform your home into a sanctuary of style and elegance.</p>
      </motion.div>
     
    </div>
  );
}

export default OurStory;
