import React, { useState, useEffect } from "react";
import "../styles/reset.css";
import "../styles/globalStyles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginComponent } from "./components/LogAccess/LoginComponent";

import { MenuComponent } from "./components/menu/MenuComponent";
import { PeopleComponent } from "./components/PeopleComponents/PeopleComponent";
import { PlanetsComponent } from "./components/planetsComponents/PlanetsComponent";
import { FilmsComponent } from "./components/films/FilmsComponent";
import { SpeciesComponent } from "./components/species/SpeciesComponent";
import { VehiclesComponent } from "./components/vehicles/VehiclesComponent";
import { StarshipsComponent } from "./components/starships/StarshipsComponent";

function App() {
  const [checkedData, setCheckedData] = useState(false);

  return (
    <>
      {/* <LoginComponent setCheckedData={setCheckedData}></LoginComponent> */}
      <Router>
        <MenuComponent />
        <Routes>
          <Route exact path="/" element={<PeopleComponent />}></Route>

          <Route exact path="/planets" element={<PlanetsComponent />}></Route>
          <Route exact path="/films" element={<FilmsComponent />}></Route>
          <Route exact path="/species" element={<SpeciesComponent />}></Route>
          <Route exact path="/vehicles" element={<VehiclesComponent />}></Route>
          <Route
            exact
            path="/starships"
            element={<StarshipsComponent />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
