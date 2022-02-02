import React, { useState, useEffect } from "react";
import "../styles/reset.css";
import "../styles/globalStyles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuComponent } from "./components/menu/MenuComponent";

import { PeopleComponent } from "./components/people/PeopleComponent";

function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      const PeopleDataSummarised = [];
      try {
        for (let i = 0; i < 9; i++) {
          let y = i + 1;
          const response = await fetch(
            `https://swapi.dev/api/people/?page=${y}&format=json`
          );
          const data = await response.json();
          PeopleDataSummarised.push(data);
        }
        console.log(PeopleDataSummarised);
        const PeopleToState = [];
        console.log(PeopleDataSummarised);
        PeopleDataSummarised.forEach(({ results }) => {
          PeopleToState.push(...results);
        });
        console.log(people);

        if(PeopleToState.length !== 0) {
          setPeople(PeopleToState)
        }
      } catch {
        console.log("failed people");
      }
    }
    async function fetchPlanets() {
      try {
        const response = await fetch(
          "https://swapi.dev/api/planets/?format=json"
        );
        const data = await response.json();
        setPlanets(data);
      } catch {
        console.log("failed planets");
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
    fetchPlanets();
    fetchFilms();
    fetchSpecies();
    fetchVehicles();
    fetchStarships();
  }, []);

  return (
    <>
      <Router>
        <MenuComponent />
        <Routes>
          <Route
            exact
            path="/"
            element={<PeopleComponent people={people} />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
