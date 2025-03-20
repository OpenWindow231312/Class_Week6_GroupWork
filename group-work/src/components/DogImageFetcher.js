import React, { useState } from "react";
import axios from "axios";
import dogBarkSound from "./dogbark.mp3"; 
import "./DogImageFetcher.css";
import DoNotClickButton from "./DoNotClickButton"; 

const DogImageFetcher = () => {
  const [imageUrl, setImageUrl] = useState("");

  // Function to play the bark sound
  const playBarkSound = () => {
    const audio = new Audio(dogBarkSound);
    audio.volume = 0.5;
    audio.play();
  };

  const fetchDogImage = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setImageUrl(response.data.message);
      playBarkSound(); 
    } catch (error) {
      console.error("Error fetching the dog image:", error);
    }
  };

  return (
    <div className="cute-container">
      <div className="cute-navbar">
        <h1>Cuteness Overload 🐾</h1>
      </div>

      <div className="dog-box">
        {imageUrl && (
          <img className="dog-image" src={imageUrl} alt="A Random Dog" />
        )}
        <button className="dog-button" onClick={fetchDogImage}>
          🐶 Show me another cute dog! 🐾
        </button>
        <div>
          {" "}
          <DoNotClickButton />
        </div>
      </div>
    </div>
  );
};

export default DogImageFetcher;
