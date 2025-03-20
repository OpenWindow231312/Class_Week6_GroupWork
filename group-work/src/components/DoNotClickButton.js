import React from 'react';
import './DoNotClickButton.css'; // Ensure this imports your CSS file for styling

const DoNotClickButton = () => {
  const handleClick = () => {
    const audio = new Audio('path/to/your/audio/file.mp3'); // Replace with the actual path to your audio file
    audio.play();
  };

  return (
    <button id="doNotClickButton" className="do-not-click" onClick={handleClick}>
      Do Not Click
    </button>
  );
};

export default DoNotClickButton;