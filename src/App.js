import { Header } from './Components/Header/Header.js';
import { Masonry } from './Components/Masonry/Masonry.js';
import { useState } from 'react';
import './App.scss';

function App() {
    const [isStart, setStart] = useState(false);
    return (
        <>
            <Header isStart={isStart} setStart={setStart}/>
            <Masonry/>
        </>
    );
}

export default App;
