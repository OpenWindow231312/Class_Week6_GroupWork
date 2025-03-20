import React from 'react';
import DogImageFetcher from './components/DogImageFetcher';
import DoNotClickButton from './components/DoNotClickButton';

const App = () => {
    return (
        <div>
            <h1>Random Dog Image Fetcher</h1>
            <DogImageFetcher />
            <DoNotClickButton />
        </div>
    );
};

export default App;
