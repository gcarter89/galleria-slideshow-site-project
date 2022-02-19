import { Header } from './Components/Header/Header.js';
import { Masonry } from './Components/Masonry/Masonry.js';
import { Detail } from './Components/Detail/Detail.js';
import { Footer } from './Components/Footer/Footer.js';
import { useState } from 'react';
import data from './assets/data.json';
import './App.scss';

function App() {
    console.log(data);
    const [isStart, setStart] = useState(true);
    const [selectedArtwork, setSelectedArtwork] = useState(data[0]);

    return (
        <>
            <Header isStart={isStart} setStart={setStart}/>
            {isStart ? <Detail selectedArtwork={selectedArtwork} /> : <Masonry data={data}/>}
            {isStart ? <Footer selectedArtwork={selectedArtwork} setSelectedArtwork={setSelectedArtwork} /> : null}
        </>
    );
}

export default App;
