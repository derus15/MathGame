import './App.css';
import './UI/Themes/Themes.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth/Auth';
import Account from './pages/Account/Account';
import { fetchAuthMe } from './redux/Slices/authSlice';


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);

    return (
        <div className={'container'}>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/auth' element={<Auth />} />
                <Route path='/account' element={<Account />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
