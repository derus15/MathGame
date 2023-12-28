import './App.css';
import './UI/Themes/Themes.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Loading from './component/Loading/Loading';
import { NotFound } from './pages/NotFound';
import { Auth } from './pages/Auth';
import { Account } from './pages/Account';
import { Home } from './pages/Home';
import { PrivateRoute } from './helpers/PrivateRoute/PrivateRoute';

const App = () => (
    <div className="container">
        <Header />
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
                <Route
                    path="/account"
                    element={
                        <PrivateRoute back="/auth">
                            <Account />
                        </PrivateRoute>
                    }
                />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
        <Footer />
    </div>
);

export default App;
