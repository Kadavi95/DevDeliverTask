// import React, { useState, useEffect } from "react";
// import { MainContainer } from "../commonElements/MainContainer";
// import { InputContainer } from "../commonElements/InputContainer";
// import { InputBrowser } from "../commonElements/InputBrowser";
// import { SelectStyled } from "../commonElements/SelectStyled";
// import { OptionStyled } from "../commonElements/OptionStyled";
// import { PeopleOptionsData } from "./PeopleOptionsData";
// import { CardStyled } from "../commonElements/CardStyled";
// import { CardInfo } from "../commonElements/CardInfo";
// import { CardButton } from "../commonElements/CardButton";
// import { GridContainer } from "../commonElements/GridContainer";
// import { PeopleModal } from "../commonElements/SectionsModals/PeopleModal";

// export function PeopleComponent(props) {
//   const [peopleSorted, setPeopleSorted] = useState([]);
//   const [genre, setGenre] = useState("male");
//   const [name, setName] = useState("");
//   const [openedModal, setOpenedModal] = useState("");

//   const { people } = props;
//   const PeopleResults = people.results;

//   const showModal = (valueOfOpenedModal) => {

//     setOpenedModal(valueOfOpenedModal);
//   };

//   useEffect(() => {
//     if (PeopleResults === undefined) {
//       console.log("Undefined");
//     } else {
//       const InitialSorted = PeopleResults.filter(
//         (item) => item.gender === genre
//       );
//       setPeopleSorted(InitialSorted);
//     }
//   }, [PeopleResults]);

//   useEffect(() => {
//     if (PeopleResults === undefined) {
//       console.log("Undefined");
//     } else {
//       const InitialSorted = PeopleResults.filter(
//         (item) => item.gender === genre
//       );
//       setPeopleSorted(InitialSorted);
//     }
//   }, [genre]);
//   useEffect(() => {
//     if (PeopleResults === undefined) {
//       console.log("Undefined");
//     } else {
//       const InitialSorted = PeopleResults.filter(
//         (item) => item.gender === genre
//       );
//       const SecondarySorted = InitialSorted.filter((item) =>
//         item.name.toUpperCase().includes(name.toUpperCase())
//       );
//       setPeopleSorted(SecondarySorted);
//     }
//   }, [name, genre]);

//   const singleCard = peopleSorted.map((item) => {
// //     const ArrayOfFilms = item.films;
// //     const ArrayOfObjectsFilms = [];
// //     async function CreateObjectOfFilms() {
// //       if (ArrayOfFilms.length !== ArrayOfObjectsFilms.length) {
// //         for (let i = 0; i <= ArrayOfFilms.length; i++) {
// //           let singleFilm = ArrayOfFilms[i];
// //           const res = await fetch(singleFilm);
// //           const data = res.json();
// //           ArrayOfObjectsFilms.push(data);
// //         }
// //       } else {
// //         console.log("The end");
// //       }
// //     }

//     return (
//       <CardStyled key={item.name}>
//         <CardInfo>{item.name}</CardInfo>
//         <CardButton onClick={() => showModal(item.name)}>
//           Dowiedz się więcej
//         </CardButton>
//         <PeopleModal
//           isModalOpen={item.name === openedModal ? true : false}
//           showModal={showModal}
//           item={item}
//         ></PeopleModal>
//       </CardStyled>
//     );
//   });
//   const SingleOption = PeopleOptionsData.map(({ id, value, text }) => {
//     return (
//       <OptionStyled key={id} value={value}>
//         {text}
//       </OptionStyled>
//     );
//   });
//   return (
//     <>
//       <MainContainer>
//         <InputContainer>
//           <InputBrowser
//             type="text"
//             value={name}
//             placeholder="Wpisz imię bohatera"
//             onChange={(event) => setName(event.target.value)}
//           />
//         </InputContainer>
//         <InputContainer>
//           <SelectStyled
//             value={genre}
//             onChange={(event) => {
//               setGenre(event.target.value);
//             }}
//           >
//             {/* <OptionStyled value="male">Mężczyźni</OptionStyled>
//             <OptionStyled value="female">Kobiety</OptionStyled>
//             <OptionStyled value="n/a">Nieoznaczone</OptionStyled> */}
//             {SingleOption}
//           </SelectStyled>
//         </InputContainer>

//         <GridContainer> {singleCard}</GridContainer>
//       </MainContainer>
//     </>
//   );
// }
