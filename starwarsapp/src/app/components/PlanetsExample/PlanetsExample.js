import React, { useEffect, useState } from "react";
import { MainContainer } from "../commonElements/MainContainer";
import { InputContainer } from "../commonElements/InputContainer";
import { InputBrowser } from "../commonElements/InputBrowser";
import { SelectStyled } from "../commonElements/SelectStyled";
import { OptionStyled } from "../commonElements/OptionStyled";
import { CardStyled } from "../commonElements/CardStyled";
import { CardInfo } from "../commonElements/CardInfo";
import { CardButton } from "../commonElements/CardButton";
import { GridContainer } from "../commonElements/GridContainer";
import { PeopleModal } from "../commonElements/SectionsModals/PeopleModal";
import { fetchPeopleAPI } from "../../API";

const SingleCard = ({ item }) => {
  return (
    <CardStyled key={item.name}>
      <CardInfo>{item.name}</CardInfo>
      {/* <CardButton onClick={() => showModal(item.name)}>
        Dowiedz się więcej
      </CardButton>
      <PeopleModal
        isModalOpen={item.name === openedModal ? true : false}
        showModal={showModal}
        item={item}
      ></PeopleModal> */}
    </CardStyled>
  );
};

const PlanetsExample = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const fetchData = (page = 1, search = "") =>
    fetch(
      `https://swapi.dev/api/people/?format=json&page=${page}&search=${search}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log({ data });
        setCount(data.count);
        setData(data.results);
      });

  useEffect(() => {
    fetchData(page, search);
  }, [page, search]);

  const onInputChange = (event) => {
    setPage(1);
    setSearch(event.target.value);
  };

  return (
    <MainContainer>
      <InputContainer>
        <InputBrowser
          type="text"
          value={search}
          placeholder="Wpisz nazwę bohatera"
          onChange={onInputChange}
        />
      </InputContainer>

      <GridContainer>
        {data.map((item) => (
          <SingleCard item={item} />
        ))}
      </GridContainer>
      <ul style={{ display: "flex" }}>
        {new Array(Math.ceil(count / 10)).fill(0).map((_, index) => (
          <li onClick={() => setPage(index + 1)}>{index + 1}</li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default PlanetsExample;
