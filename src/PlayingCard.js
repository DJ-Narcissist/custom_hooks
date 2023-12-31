import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "./hooks/useFlip";

/* Renders a single playing card. */
const PlayingCard = ({ front, back = backOfCard }) => {
  const [isFlipped, flip] = useFlip();
  
  return (
    <img
      src={isFlipped ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
