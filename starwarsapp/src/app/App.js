import React, { useState, useEffect } from "react";
import "../styles/reset.css";
import "../styles/globalStyles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuComponent } from "./components/menu/MenuComponent";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect(()=> {
    
  }, []);
  return (
    <>
      <Router>
        <MenuComponent />
        <Routes>
          <Route></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
