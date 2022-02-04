import React, { useState, useEffect } from "react";
import "../styles/reset.css";
import "../styles/globalStyles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LoginComponent } from "./components/LogAccess/LoginComponent";

import { MenuComponent } from "./components/menu/MenuComponent";
import { PeopleComponent } from "./components/people/PeopleComponent";
import { PlanetsComponent } from "./components/planets/PlanetsComponent";
import { FilmsComponent } from "./components/films/FilmsComponent";
import { SpeciesComponent } from "./components/species/SpeciesComponent";
import { VehiclesComponent } from "./components/vehicles/VehiclesComponent";
import { StarshipsComponent } from "./components/starships/StarshipsComponent";
import PlanetsExample from "./components/PlanetsExample/PlanetsExample";

function App() {
  const [checkedData, setCheckedData] = useState(false);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      // const PeopleDataSummarised = [];
      try {
        // for (let i = 0; i < 9; i++) {
        //   let y = i + 1;
        //   const response = await fetch(
        //     `https://swapi.dev/api/people/?page=${y}&format=json`
        //   );
        //   const data = await response.json();
        //   PeopleDataSummarised.push(data);
        // }
        // console.log(PeopleDataSummarised);
        // const PeopleToState = [];
        // console.log(PeopleDataSummarised);
        // PeopleDataSummarised.forEach(({ results }) => {
        //   PeopleToState.push(...results);
        // });
        // console.log(people);

        // if(PeopleToState.length !== 0) {
        //   setPeople(PeopleToState)
        // }

        const response = await fetch(
          "https://swapi.dev/api/people/?format=json"
        );
        const data = await response.json();
        setPeople(data);
      } catch {
        console.log("failed people");
      }
    }

    async function fetchFilms() {
      try {
        const response = await fetch(
          "https://swapi.dev/api/films/?format=json"
        );
        const data = await response.json();
        setFilms(data);
      } catch {
        console.log("failed films");
      }
    }
    async function fetchSpecies() {
      try {
        const response = await fetch(
          "https://swapi.dev/api/species/?format=json"
        );
        const data = await response.json();
        setSpecies(data);
      } catch {
        console.log("failed species");
      }
    }
    async function fetchVehicles() {
      try {
        const response = await fetch(
          "https://swapi.dev/api/vehicles/?format=json"
        );
        const data = await response.json();
        setVehicles(data);
      } catch {
        console.log("failed species");
      }
    }
    async function fetchStarships() {
      try {
        const response = await fetch(
          "https://swapi.dev/api/starships/?format=json"
        );
        const data = await response.json();
        setStarships(data);
      } catch {
        console.log("failed species");
      }
    }
    fetchPeople();
    // fetchPlanets();
    fetchFilms();
    fetchSpecies();
    fetchVehicles();
    fetchStarships();
  }, [checkedData]);

  console.log(species);
  return (
    <>
      <LoginComponent setCheckedData={setCheckedData}></LoginComponent>
      <Router>
        <MenuComponent />
        <Routes>
          <Route exact path="/" element={<PlanetsExample />}></Route>
          {/* <Route
            exact
            path="/"
            element={<PeopleComponent people={people} />}
          ></Route> */}
          <Route
            exact
            path="/planets"
            element={<PlanetsComponent planets={planets} />}
          ></Route>
          <Route
            exact
            path="/films"
            element={<FilmsComponent films={films} />}
          ></Route>
          <Route
            exact
            path="/species"
            element={<SpeciesComponent species={species} />}
          ></Route>
          <Route
            exact
            path="/vehicles"
            element={<VehiclesComponent vehicles={vehicles} />}
          ></Route>
          <Route
            exact
            path="/starships"
            element={<StarshipsComponent starships={starships} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
