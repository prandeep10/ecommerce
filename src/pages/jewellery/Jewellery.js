import React from 'react';
import './Jewellery.css';
import { motion } from 'framer-motion';
import { FaCartPlus } from 'react-icons/fa';

const Jewellery = () => {
  const decorItems = [
    { name: 'Figurines', price: '₹25', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-rLTIKo4N-myRe4avTLRJIxTQ4tqsjuynFs8cDdadYA&s' },
    { name: 'Decorative Vase', price: '₹30', image: 'https://m.media-amazon.com/images/I/6132w8fKBvL._AC_UY1100_.jpg' },
    { name: 'Wall Clock', price: '₹40', image: 'https://m.media-amazon.com/images/I/81zl1k5wDNL._AC_SS300_.jpg' },
    { name: 'Decorative Lamp', price: '₹35', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFBzlNPIKUb3gzkkTk9DAJi83E8WKR-tTOwobBTsYfw&s' },
    { name: 'Candle Holders', price: '₹20', image: 'https://img.etimg.com/thumb/msid-99060125,width-480,height-360,imgsize-475148,resizemode-75/hallmarking-on-gold-jewellery-and-related-items-is-set-to-become-mandatory-from-april-1-2023.jpg' },
    { name: 'Wall Clock', price: '₹40', image: 'https://m.media-amazon.com/images/I/81zl1k5wDNL._AC_SS300_.jpg' },
    { name: 'Decorative Lamp', price: '₹35', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFBzlNPIKUb3gzkkTk9DAJi83E8WKR-tTOwobBTsYfw&s' },
    { name: 'Candle Holders', price: '₹20', image: 'https://img.etimg.com/thumb/msid-99060125,width-480,height-360,imgsize-475148,resizemode-75/hallmarking-on-gold-jewellery-and-related-items-is-set-to-become-mandatory-from-april-1-2023.jpg' },
  ];

  return (
    <div className='jewellery'>
      <h1>Jewellery</h1>
      <motion.div className="jewellery-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        {decorItems.map((item, index) => (
          <motion.div key={index} className="decor-item-card" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: index * 0.1 }}>
            <img src={item.image} alt={item.name} className="decor-item-image" />
            <div className="decor-item-info">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
            <motion.button className="button-42" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaCartPlus /> Add to Cart</motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Jewellery;
