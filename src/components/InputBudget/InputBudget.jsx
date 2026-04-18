import React from 'react';
import './InputBudget.css';

const InputBudget = ({ value, onChange }) => {
  return (
    <div className="input-group">
      <label htmlFor="budget">Masukkan Total Anggaran (Rp):</label>
      <input
        type="number"
        id="budget"
        placeholder="Contoh: 5000000000000"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default InputBudget;