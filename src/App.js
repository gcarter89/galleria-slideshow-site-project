import { Header } from './Components/Header/Header.js';
import { Masonry } from './Components/Masonry/Masonry.js';
import { Detail } from './Components/Detail/Detail.js';
import { Footer } from './Components/Footer/Footer.js';
import { useState, useEffect, useCallback } from 'react';
import data from './assets/data.json';
import './App.scss';

function App() {
    const [isStart, setStart] = useState(false);
    const [selectedArtwork, setSelectedArtwork] = useState(data[0]);
    const [artworkIndex, setArtworkIndex] = useState(0);



    const [viewImage, setViewImage] = useState(false);


    const progressPercentage = ((artworkIndex + 1) / data.length) * 100;
    const dataLength = data.length - 1;

    function handleArtworkSelect(event, artwork) {
        event.preventDefault();
        setStart(true);
        const searchIndex = data.map(object => object.name).indexOf(artwork.name);
        setSelectedArtwork(data[searchIndex]);
        setArtworkIndex(searchIndex);
    }

    function handleHeaderClick(event) {
        event.preventDefault();
        setSelectedArtwork(data[0]);
        setArtworkIndex(0);
        setStart(!isStart);
    }

    // function handleForwardButton(event) {
    //     event.preventDefault();
    //     if (artworkIndex === data.length - 1 ) {
    //         return setEndOfSeries(true);
    //     }
    //     const nextIndex = artworkIndex + 1;
    //     setArtworkIndex(nextIndex);
    //     return setEndOfSeries(false);
    // }

    // function handleBackButton(event) {
    //     event.preventDefault();
    //     if (artworkIndex === 0) {
    //         return setEndOfSeries(true);
    //     }
        
    //     const previousIndex = artworkIndex - 1;
    //     setArtworkIndex(previousIndex);
    //     return setEndOfSeries(false);
    // }

    const handleArtworkChange = useCallback(() => {
        const updatedIndex = artworkIndex + 1;

        if (artworkIndex === data.length - 1) {
            setArtworkIndex(0);
        } else {
            setArtworkIndex(updatedIndex);
        }
    },[artworkIndex])


    useEffect(() => {
        setSelectedArtwork(data[artworkIndex])
    }, [artworkIndex])


    return (
        <>
            <Header handleHeaderClick={handleHeaderClick} isStart={isStart}/>
            {isStart ? <Detail viewImage={viewImage} setViewImage={setViewImage} handleArtworkChange={handleArtworkChange} selectedArtwork={selectedArtwork} /> : <Masonry data={data} handleArtworkSelect={handleArtworkSelect}/>}
            {isStart ? <Footer dataLength={dataLength} progressPercentage={progressPercentage} selectedArtwork={selectedArtwork} artworkIndex={artworkIndex} setArtworkIndex={setArtworkIndex} /> : null}
        </>
    );
}

export default App;
