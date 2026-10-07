import React, { useState } from 'react';
import Display from './components/Display';
import Button from './components/Button';
import './App.css';
// Calculator App - Logic and State
function App() {
  const [expression, setExpression] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'Clear') {
      setExpression('');
    } else if (value === 'Delete') {
      setExpression((prev) => prev.slice(0, -1));
    } else if (value === '=') {
      try {
        const formattedExp = expression.replace(/×/g, '*').replace(/÷/g, '/');
        const result = eval(formattedExp);
        setExpression(String(result));
      } catch (error) {
        setExpression('Error');
      }
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const buttons = [
    [
      { label: 'Clear', color: '#388E3C' },
      { label: 'Delete', color: '#388E3C' },
      { label: '.', color: '#388E3C' },
      { label: '/', color: '#388E3C' },
    ],
    [
      { label: '7', color: '#4CAF50' },
      { label: '8', color: '#4CAF50' },
      { label: '9', color: '#4CAF50' },
      { label: '*', color: '#388E3C' },
    ],
    [
      { label: '4', color: '#4CAF50' },
      { label: '5', color: '#4CAF50' },
      { label: '6', color: '#4CAF50' },
      { label: '-', color: '#388E3C' },
    ],
    [
      { label: '1', color: '#4CAF50' },
      { label: '2', color: '#4CAF50' },
      { label: '3', color: '#4CAF50' },
      { label: '+', color: '#388E3C' },
    ],
    [
      { label: '0', color: '#4CAF50' },
      { label: '=', color: '#388E3C' },
    ],
  ];

  return (
    <div className="calculator-container">
      <Display value={expression} />
      <div className="buttons-grid">
        {buttons.map((row, rowIndex) => (
          <div key={rowIndex} className="button-row">
            {row.map((btn) => (
              <Button
                key={btn.label}
                label={btn.label}
                bgColor={btn.color}
                onClick={handleButtonClick}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;