import React from 'react';
import './HomeDecor.css';
import { motion } from 'framer-motion';
import { FaCartPlus } from 'react-icons/fa';

const HomeDecor = () => {
  const decorItems = [
    { name: 'Figurines', price: '₹25', image: 'https://hometown.gumlet.io/media/cms/icons/Kitchenware/figurines.jpg?w=200&dpr=2.6' },
    { name: 'Decorative Vase', price: '₹30', image: 'https://m.media-amazon.com/images/I/71dkL0GxoCL._AC_UF1000,1000_QL80_.jpg' },
    { name: 'Wall Clock', price: '₹40', image: 'https://images.woodenstreet.de/image/cache/data%2FHandicraft+Town%2Fmodern-roman-theme-colorful-premium-wall-clock%2F1-750x650.jpg' },
    { name: 'Decorative Lamp', price: '₹35', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFBzlNPIKUb3gzkkTk9DAJi83E8WKR-tTOwobBTsYfw&s' },
    { name: 'Candle Holders', price: '₹20', image: 'https://m.media-amazon.com/images/I/81AzD-hsl-L.jpg' },
    { name: 'Figurines', price: '₹25', image: 'https://hometown.gumlet.io/media/cms/icons/Kitchenware/figurines.jpg?w=200&dpr=2.6' },
    { name: 'Decorative Vase', price: '₹30', image: 'https://m.media-amazon.com/images/I/71dkL0GxoCL._AC_UF1000,1000_QL80_.jpg' },
    { name: 'Wall Clock', price: '₹40', image: 'https://images.woodenstreet.de/image/cache/data%2FHandicraft+Town%2Fmodern-roman-theme-colorful-premium-wall-clock%2F1-750x650.jpg' },
    { name: 'Wall Clock', price: '₹40', image: 'https://images.woodenstreet.de/image/cache/data%2FHandicraft+Town%2Fmodern-roman-theme-colorful-premium-wall-clock%2F1-750x650.jpg' },
    { name: 'Decorative Lamp', price: '₹35', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxFBzlNPIKUb3gzkkTk9DAJi83E8WKR-tTOwobBTsYfw&s' },
  ];

  return (
    <div className='home-decor'>
      <h1>HomeDecor</h1>
      <motion.div className="home-decor-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        {decorItems.map((item, index) => (
          <motion.div key={index} className="decor-item-card" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: index * 0.1 }}>
            <img src={item.image} alt={item.name} className="decor-item-image" />
            <div className="decor-item-info">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
            <motion.button className="button-41" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaCartPlus /> Add to Cart</motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default HomeDecor;
