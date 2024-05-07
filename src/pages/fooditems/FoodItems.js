import React from 'react';
import './FoodItems.css';
import { motion } from 'framer-motion';
import { FaCartPlus } from 'react-icons/fa';

const FoodItems = () => {
  const decorItems = [
    { name: 'Figurines', price: '₹25', image: 'https://rukminim2.flixcart.com/image/850/1000/krp94sw0/cereal-flake/x/g/x/1000-poha-premium-pouch-swach-original-imag5frpfrz2tkvg.jpeg?q=90&crop=false' },
    { name: 'Decorative Vase', price: '₹30', image: 'https://www.bigbasket.com/media/uploads/p/xxl/40103773_3-farmveda-instant-mix-lemon-poha.jpg' },
    { name: 'Wall Clock', price: '₹40', image: 'https://www.wsfoods.in/img/samosa.png' },
    { name: 'Candle Holders', price: '₹20', image: 'https://www.tatanutrikorner.com/cdn/shop/products/00_d61f46a0-8f77-423a-8381-a4fd57c828a5.jpg?height=645&pad_color=fff&v=1681447162&width=645' },
    { name: 'Figurines', price: '₹25', image: 'https://rukminim2.flixcart.com/image/850/1000/krp94sw0/cereal-flake/x/g/x/1000-poha-premium-pouch-swach-original-imag5frpfrz2tkvg.jpeg?q=90&crop=false' },
    { name: 'Decorative Vase', price: '₹30', image: 'https://www.bigbasket.com/media/uploads/p/xxl/40103773_3-farmveda-instant-mix-lemon-poha.jpg' },
    { name: 'Wall Clock', price: '₹40', image: 'https://www.wsfoods.in/img/samosa.png' },
    { name: 'Candle Holders', price: '₹20', image: 'https://www.tatanutrikorner.com/cdn/shop/products/00_d61f46a0-8f77-423a-8381-a4fd57c828a5.jpg?height=645&pad_color=fff&v=1681447162&width=645' },
    { name: 'Figurines', price: '₹25', image: 'https://rukminim2.flixcart.com/image/850/1000/krp94sw0/cereal-flake/x/g/x/1000-poha-premium-pouch-swach-original-imag5frpfrz2tkvg.jpeg?q=90&crop=false' },
  ];

  return (
   <div className='food-items'>
    <h1>Food Items</h1>
     <motion.div className="food-items-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      {decorItems.map((item, index) => (
        <motion.div key={index} className="decor-item-card" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: index * 0.1 }}>
          <img src={item.image} alt={item.name} className="decor-item-image" />
          <div className="decor-item-info">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
          <motion.button className="button-44" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaCartPlus /> Add to Cart</motion.button>
        </motion.div>
      ))}
    </motion.div>
   </div>
  );
}

export default FoodItems;
