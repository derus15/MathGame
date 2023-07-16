import './App.css';
import './UI/Themes/Themes.css';
import React from 'react';
import Auth from './component/pages/Auth';
import { Route, Routes } from 'react-router-dom';
import Home from './component/pages/Home';

function App() {


    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            {/*<Route path='/auth' element={<Auth/>} />*/}
        </Routes>
    );
}

export default App;
