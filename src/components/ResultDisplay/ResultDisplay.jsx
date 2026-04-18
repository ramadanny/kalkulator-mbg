import React from 'react';
import './ResultDisplay.css';

const ResultDisplay = ({ days }) => {
  return (
    <div className="result-container">
      <h3>Daya Tahan Anggaran:</h3>
      <div className="result-value">
        {days > 0 ? `${days} Hari` : '0 Hari'}
      </div>
    </div>
  );
};

export default ResultDisplay;