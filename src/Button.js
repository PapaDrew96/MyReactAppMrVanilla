import React from 'react';
import './Button.css';

// Button component accepting 'text' and 'onClick' as props
const Button = ({ text, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
