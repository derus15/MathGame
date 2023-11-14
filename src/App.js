import './App.css';
import './UI/Themes/Themes.css';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Home from './pages/Home';
import Auth from './pages/Auth/Auth';
import Account from './pages/Account/Account';
import { fetchAuthMe } from './redux/Slices/backSlices/authSlice';
import NotFound from './pages/NotFound/NotFound';
import Header from "./component/Header/Header";

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);

    return (
        <div className="container">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/account" element={<Account />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
