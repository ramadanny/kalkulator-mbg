import React, { useState } from 'react';
import InputBudget from '../../components/InputBudget/InputBudget';
import ResultDisplay from '../../components/ResultDisplay/ResultDisplay';
import { DAILY_SPENDING } from '../../utils/constants';
import './Calculator.css';

const Calculator = () => {
  const [budget, setBudget] = useState('');
  const [displayDays, setDisplayDays] = useState(0);

  const handleCalculate = () => {
    if (!budget || budget <= 0) {
      setDisplayDays(0);
      return;
    }
    
    // Kalkulasi dilakukan di sini, bukan realtime
    const result = budget / DAILY_SPENDING;
    setDisplayDays(Math.round(result));
  };

  return (
    <div className="calculator-card">
      <h2>Kalkulator MBG</h2>
      <p>Biaya tetap: 1.2 Triliun / hari</p>
      <hr />
      
      <InputBudget value={budget} onChange={setBudget} />
      
      <button className="calculate-btn" onClick={handleCalculate}>
        Hitung Daya Tahan
      </button>

      <ResultDisplay days={displayDays} />
    </div>
  );
};

export default Calculator;