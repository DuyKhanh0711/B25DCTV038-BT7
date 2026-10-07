import React from 'react';

function Button({ label, onClick, bgColor }) {
  return (
    <button
      className="calculator-btn"
      style={{ backgroundColor: bgColor || '#4CAF50' }}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
}

export default Button;