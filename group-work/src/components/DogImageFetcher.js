import React, { useState } from "react";
import axios from "axios";
import "./DogImageFetcher.css"; // Import the updated CSS

const DogImageFetcher = () => {
  const [imageUrl, setImageUrl] = useState("");

  const fetchDogImage = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      setImageUrl(response.data.message);
    } catch (error) {
      console.error("Error fetching the dog image:", error);
    }
  };

  return (
    <div className="cute-container">
      {/* Cute Navbar */}
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
      </div>
    </div>
  );
};

export default DogImageFetcher;
