import './styles/App.css';
import 'app/styles/Themes.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from 'widgets/Footer';
import Header from 'widgets/Header/Header';
import Loading from 'shared/UI/Loading/Loading';
import { NotFound } from 'pages/NotFound';
import { Auth } from 'pages/Auth';
import { Account } from 'pages/Account';
import { Home } from 'pages/Home';
import { PrivateRoute } from 'shared/lib/PrivateRoute/PrivateRoute';

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
                        <PrivateRoute redirect="/auth">
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
