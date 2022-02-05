import React, { useEffect, useState } from "react";
import { MainContainer } from "../commonElements/MainContainer";
import { InputContainer } from "../commonElements/InputContainer";
import { InputBrowser } from "../commonElements/InputBrowser";
import { CardStyled } from "../commonElements/CardStyled";
import { CardInfo } from "../commonElements/CardInfo";
import { CardButton } from "../commonElements/CardButton";
import { GridContainer } from "../commonElements/GridContainer";
import {StarshipsModal} from "../commonElements/SectionsModals/StarshipsModal"
import { ChangePageLi } from "../commonElements/ChangePageLi";

export const StarshipsComponent = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  const [openedModal, setOpenedModal] = useState("");

  const showModal = (valueOfOpenedModal) => {
    setOpenedModal(valueOfOpenedModal);
  };

  const fetchData = (page = 1, search = "") =>
    fetch(
      `https://swapi.dev/api/StarshipsModal/?format=json&page=${page}&search=${search}`
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

  const singleCard = data.map((item) => {
    return (
      <CardStyled key={item.name}>
        <CardInfo>{item.name}</CardInfo>
        <CardButton onClick={() => showModal(item.name)}>
          Dowiedz się więcej
        </CardButton>
        <StarshipsModal
          isModalOpen={item.name === openedModal ? true : false}
          showModal={showModal}
          item={item}
        ></StarshipsModal>
      </CardStyled>
    );
  });

  return (
    <MainContainer>
      <InputContainer>
        <InputBrowser
          type="text"
          value={search}
          placeholder="Wpisz nazwę statku"
          onChange={onInputChange}
        />
      </InputContainer>

      <GridContainer>
        {/* {data.map((item) => (
          <SingleCard item={item} showModal={showModal} />
        ))} */}
        {singleCard}
      </GridContainer>
      <InputContainer>
        <ul style={{ display: "flex" }}>
          {new Array(Math.ceil(count / 10)).fill(0).map((_, index) => (
            <ChangePageLi onClick={() => setPage(index + 1)}>
              {index + 1}
            </ChangePageLi>
          ))}
        </ul>
      </InputContainer>
    </MainContainer>
  );
};
