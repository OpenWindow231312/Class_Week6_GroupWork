import React, { useState } from 'react';
import axios from 'axios';

const DogImageFetcher = () => {
    const [imageUrl, setImageUrl] = useState('');

    const fetchDogImage = async () => {
        try {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random');
            setImageUrl(response.data.message);
        } catch (error) {
            console.error('Error fetching the dog image:', error);
        }
    };

    return (
        <div>
            <button onClick={fetchDogImage}>Fetch Dog Image</button>
            {imageUrl && <img src={imageUrl} alt="A Random Dog" style={{ marginTop: '20px', maxWidth: '100%' }} />}
        </div>
    );
};

export default DogImageFetcher;