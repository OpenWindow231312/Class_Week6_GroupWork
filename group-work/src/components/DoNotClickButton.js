import React from "react";
import "./DoNotClickButton.css";
import soundEffect from "../components/randomsound.mp3"; // Import the sound file

const DoNotClickButton = () => {
  const handleClick = () => {
    const audio = new Audio(soundEffect);
    audio.volume = 0.7; // Adjust volume (0.0 to 1.0)
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