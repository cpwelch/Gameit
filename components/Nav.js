import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import logo from "../img/logo.svg";

import { fetchSearch } from "../actions/gameAction";
import { useDispatch } from "react-redux";

import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();

  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    dispatch(fetchSearch(textInput));
    e.preventDefault();
    setTextInput("");
  };

  const clearResults = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };

  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <Logo onClick={clearResults}>
        <img src={logo} alt="GameIt Logo" />
        <h1>GameIt</h1>
      </Logo>
      <SearchDiv>
        <input
          type="text"
          onChange={inputHandler}
          value={textInput}
          placeholder="Search for a game"
        ></input>
        <button type="submit" onClick={submitSearch}>
          Search
        </button>
      </SearchDiv>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30rem;
    font-size: 1.25rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
    outline: none;
    border-radius: 2rem;
  }
  button {
    font-size: 1.25rem;
    border: none;
    padding: 0.55rem 2rem;
    cursor: pointer;
    background-color: #ff7676;
    color: white;
    border-radius: 2rem;
    position: absolute;
    z-index: 2;
    transform: translate(-8rem, 1rem);
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }
`;

const SearchDiv = styled(motion.form)`
  position: relative;
`;
export default Nav;
