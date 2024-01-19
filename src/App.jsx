import {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/NavBar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ChiSiamo from './components/ChiSiamo.jsx';
import Strutture from './components/StruttureRicettive.jsx';
import bg from "./bg.jpg"

function App() {
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
                            <NavigationBar></NavigationBar>
                            <h1>HOME PAGE</h1>
                        </div>
                    }/>
                    <Route path='/chiSiamo' element={
                        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
                            <NavigationBar></NavigationBar>
                            <ChiSiamo></ChiSiamo>
                        </div>
                    }/>
                    <Route path='/struttureRicettive' element={
                        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
                            <NavigationBar></NavigationBar>
                            <Strutture></Strutture>
                        </div>
                    }/>
                </Routes>
            </BrowserRouter>
        </>
    )}


export default App;
