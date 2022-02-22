import { Header } from './Components/Header/Header.js';
import { Masonry } from './Components/Masonry/Masonry.js';
import { Detail } from './Components/Detail/Detail.js';
import { Footer } from './Components/Footer/Footer.js';
import { useState } from 'react';
import data from './assets/data.json';
import './App.scss';

function App() {
    const [isStart, setStart] = useState(false);
    const [selectedArtwork, setSelectedArtwork] = useState(data[4]);

    function handleArtworkSelect(event, artwork) {
        event.preventDefault();
        setStart(true);
        const searchIndex = data.map(object => object.name).indexOf(artwork.name);
        setSelectedArtwork(data[searchIndex]);
    }


    return (
        <>
            <Header isStart={isStart} setStart={setStart}/>
            {isStart ? <Detail selectedArtwork={selectedArtwork} /> : <Masonry data={data} handleArtworkSelect={handleArtworkSelect}/>}
            {isStart ? <Footer selectedArtwork={selectedArtwork} setSelectedArtwork={setSelectedArtwork} /> : null}
        </>
    );
}

export default App;
