import React from "react";
import "./DoNotClickButton.css";
import soundEffect from "./randomsound.mp3"; // Corrected path

const DoNotClickButton = () => {
  const handleClick = () => {
    const audio = new Audio(soundEffect);
    audio.volume = 0.7;
    audio.play();
  };

  return (
    <button
      id="doNotClickButton"
      className="do-not-click"
      onClick={handleClick}
    >
      🚨 Do Not Click 🚨
    </button>
  );
};

export default DoNotClickButton;
