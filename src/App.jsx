import React from 'react';
import Calculator from './features/Calculator/Calculator';
import Footer from './components/Footer/Footer'; // Import footer baru
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Container utama untuk konten */}
      <main style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Calculator />
      </main>
      
      {/* Footer di bagian bawah */}
      <Footer />
    </div>
  );
}

export default App;