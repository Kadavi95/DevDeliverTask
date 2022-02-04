import React, { useState, useEffect } from "react";
import { LoginBackground } from "./LoginBackground";
import styled from "styled-components";

const LoginBackgroundContainer = styled.section`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 1);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.section`
  width: 100%;
  height: 50%;
  background-color: yellow;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export function LoginComponent(props) {
  console.log(props);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState;

  async function fetchUser() {
    try {
      const response = await fetch("./fakeUser.json");
      const data = await response.json();
      setUserName(data);
    } catch {
      console.log("failed user");
    }
  }
  fetchUser();

  console.log(userData);

  const HandleName = (value) => {
    setUserName(value);
  };

  const HandlePassword = (value) => {
    setPassword(value);
  };

  const HandleData = () => {
    if (userName === "a" && password === "b") {
      console.log("a");
    } else {
      return;
    }
  };

  return (
    <>
      <LoginBackgroundContainer>
        <FormContainer>
          <form>
            <input
              type="text"
              placeholder="Wpisz nazwę użytkownika"
              value={userName}
              onChange={(event) => HandleName(event.target.value)}
            />
            <input
              type="password"
              placeholder="Wpisz hasło użytkownika"
              value={password}
              onChange={(event) => HandlePassword(event.target.value)}
            />
            <button onClick={HandleData()}> Potwierdź dane</button>
          </form>
        </FormContainer>
      </LoginBackgroundContainer>
    </>
  );
}
