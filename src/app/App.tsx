import './styles/App.css';
import 'app/styles/Themes.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from 'shared/UI/Loading/Loading';
import { NotFound } from 'pages/NotFound';
import { Auth } from 'pages/Auth';
import { Account } from 'pages/Account';
import { Home } from 'pages/Home';
import { PrivateRoute } from 'shared/lib/PrivateRoute/PrivateRoute';
import { Toast } from 'shared/UI/Toaster/Toast';
import { Header } from 'widgets/Header';
import { useGetInitAuthDataQuery } from 'entities/User';

const App = () => {

    const token = localStorage.getItem('token');
    useGetInitAuthDataQuery(undefined, { skip: !token });

    return (
        <div className="mainContainer">
            <Header />
            <Toast />
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
        </div>
    );
};

export default App;
