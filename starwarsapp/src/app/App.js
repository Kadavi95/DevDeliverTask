import React from 'react';
import '../styles/reset.css'
import '../styles/globalStyles.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { MenuComponent } from './components/menu/MenuComponent';


function App() {
  return (
    <>
      <Router>
        <MenuComponent/>
          <Routes>
            <Route></Route>
          </Routes>

        
      </Router>
    </>
  );
}

export default App;
