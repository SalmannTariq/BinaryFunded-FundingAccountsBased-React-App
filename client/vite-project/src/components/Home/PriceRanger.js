import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi'
const PriceRanger = () => {
  const [profit, setProfit] = useState(5000); // Initial profit value
  const [percentage, setPercentage] = useState(0.1); // Initial percentage range value

  const handleIncreaseProfit = () => {
    if (profit < 1500000) {
      setProfit(prevProfit => prevProfit + 5000);
    }
  };

  const handleDecreaseProfit = () => {
    if (profit > 5000) {
      setProfit(prevProfit => prevProfit - 5000);
    }
  };

  const handlePercentageChange = (e) => {
    setPercentage(parseFloat(e.target.value));
  };

  const calculatedProfit = Math.round((profit * percentage) / 100);

  return (
    <>
    <h5 className='estimate-profit-text fw-bold'>Estimate Your Profits!</h5>
    <div className="price-ranger">
      <div className="profit-buttons">
        <button onClick={handleDecreaseProfit} className='subtract-btnn' disabled={profit === 5000}><FiMinus /></button>
        <div className="profit-value">${profit}</div>
        <button onClick={handleIncreaseProfit} className='add-btnn'><FiPlus /></button>
      </div>
      <div className="percentage-range">
      <div className='text-center text-white fs-3 fw-bold'>{percentage}%</div>
        <input type="range" min="0.1" max="12" step="0.1" value={percentage} className='range-field' onChange={handlePercentageChange} />
      </div>
      <div className="calculated-profit">
        <span className='profit-text'>${calculatedProfit}</span><span className='fs-5'> /month</span></div>
    </div>
    </>

  );
};

export default PriceRanger;
