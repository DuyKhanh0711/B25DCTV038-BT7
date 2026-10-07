import React from 'react';

function Display({ value }) {
  return (
    <div className="calculator-display">
      {value || '0'}
    </div>
  );
}

export default Display;