import styled from "styled-components";

export const GridContainer = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10rem;
  justify-items: center;
  align-items: center;
`;
