import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/gameDetailAction";
import { Link } from "react-router-dom";
import { smallerImageHandler } from "../util";
import { popIn } from "../animations";

const Game = ({ name, release, image, id }) => {
  const idToString = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
    document.body.style.overflow = "hidden";
  };
  return (
    <StyledGame
      variants={popIn}
      initial="hidden"
      animate="show"
      layoutId={idToString}
      onClick={loadDetailHandler}
    >
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${idToString}`} layout>
          {name}
        </motion.h3>
        <p>{release}</p>
        <motion.img
          layoutId={`image ${idToString}`}
          src={smallerImageHandler(image, 640)}
          alt={name}
          loading="lazy"
        />
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 0.8rem;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
