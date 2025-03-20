import React, { useState } from "react";
import axios from "axios";
import "./DogImageFetcher.css"; // Correct CSS import

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
    <div className="dog-container">
      <button className="dog-button" onClick={fetchDogImage}>
        Fetch Dog Image
      </button>
      {imageUrl && (
        <img className="dog-image" src={imageUrl} alt="A Random Dog" />
      )}
    </div>
  );
};

export default DogImageFetcher;
