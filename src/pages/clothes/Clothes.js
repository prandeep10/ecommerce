import React from 'react';
import './Clothes.css';
import { motion } from 'framer-motion';
import { FaCartPlus } from 'react-icons/fa';

const Clothes = () => {
  const decorItems = [
    { name: 'Figurines', price: '₹25', image: 'https://prabhubhakti.in/wp-content/uploads/2023/02/Kattar-Hindu-Quotes-Printed-Plain-Black-T-Shirt.jpg' },
    { name: 'Decorative Vase', price: '₹30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45JC2xJrIM7nyjYJ3vstXjqKc3-aZxQ7JFyCoDxYiXw&s' },
    { name: 'Wall Clock', price: '₹40', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjqDlVpsx80hr1EPxI1cbCL9Oqvvg869Fj9AQk6Bvlg&s' },
    { name: 'Decorative Lamp', price: '₹35', image: 'https://teeshopper.b-cdn.net/product_page_asset/images/Sanatani-Tshirt_meta.png' },
    { name: 'Candle Holders', price: '₹20', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDVnJZLgwILt9-cy9gzRjHfVuhZWzKoIU4-4hNe_HsvQ&s' },
    { name: 'Figurines', price: '₹25', image: 'https://m.media-amazon.com/images/I/61auXy9Fz+L._AC_UY1100_.jpg' },
    { name: 'Decorative Vase', price: '₹30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmSSL4qjmcdnISvfwzdG3LKH5g-RtO9HKm2ptgbw5c2w&s' },
    { name: 'Decorative Vase', price: '₹30', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45JC2xJrIM7nyjYJ3vstXjqKc3-aZxQ7JFyCoDxYiXw&s' },
    { name: 'Figurines', price: '₹25', image: 'https://prabhubhakti.in/wp-content/uploads/2023/02/Kattar-Hindu-Quotes-Printed-Plain-Black-T-Shirt.jpg' },
  ];

  return (
   <div className='clothes'>
    <h1>Clothes</h1>
     <motion.div className="clothes-container" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      {decorItems.map((item, index) => (
        <motion.div key={index} className="decor-item-card" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: index * 0.1 }}>
          <img src={item.image} alt={item.name} className="decor-item-image" />
          <div className="decor-item-info">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
          <motion.button className="button-43" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}><FaCartPlus /> Add to Cart</motion.button>
        </motion.div>
      ))}
    </motion.div>
   </div>
  );
}

export default Clothes;
