import React from 'react';
import '../styles/reset.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Menu/>
          <Routes>
            <Route/>
          </Routes>

        <Footer/>
      </Router>
    </>
  );
}

export default App;
