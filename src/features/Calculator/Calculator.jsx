import React, { useState, useMemo } from 'react';
import InputBudget from '../../components/InputBudget/InputBudget';
import ResultDisplay from '../../components/ResultDisplay/ResultDisplay';
import { DAILY_SPENDING } from '../../utils/constants';
import './Calculator.css';

const Calculator = () => {
  const [budget, setBudget] = useState('');

  // useMemo digunakan agar kalkulasi hanya berjalan saat budget berubah
  const daysResult = useMemo(() => {
    if (!budget || budget <= 0) return 0;
    const result = budget / DAILY_SPENDING;
    return Math.round(result); // Pembulatan ke angka utuh terdekat
  }, [budget]);

  return (
    <div className="calculator-card">
      <h2>Kalkulator MBG</h2>
      <p>Biaya tetap: 1.2 Triliun / hari</p>
      <hr />
      <InputBudget value={budget} onChange={setBudget} />
      <ResultDisplay days={daysResult} />
    </div>
  );
};

export default Calculator;