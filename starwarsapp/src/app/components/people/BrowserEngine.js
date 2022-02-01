import React, { useState } from "react";
import styled from "styled-components";

const InputSearchValue = styled.input`
  padding: 20rem 10rem;
  outline: none;
`;

export function BrowserEngine() {
  const [searchValue, setSearchValue] = useState([]);
  return (
    <>
      <input type="text" minLength={3} maxLength={11} />
    </>
  );
}
