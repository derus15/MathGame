import './App.css';
import './UI/Themes/Themes.css';
import React, { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import { fetchAuthMe } from './redux/Slices/backSlices/authSlice';
import Header from './component/Header/Header';
import Loading from './component/Loading/Loading';
import { NotFound } from './pages/NotFound';
import { Auth } from './pages/Auth';
import { Account } from './pages/Account';
import { Home } from './pages/Home';

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);

    return (
        <div className="container">
            <Header />
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
            <Footer />
        </div>
    );
};

export default App;
