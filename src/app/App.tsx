import './styles/App.css';
import 'app/styles/Themes.css';
import React, { Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from 'shared/UI/Loading/Loading';
import { NotFound } from 'pages/NotFound';
import { Auth } from 'pages/Auth';
import { Account } from 'pages/Account';
import { Home } from 'pages/Home';
import { PrivateRoute } from 'shared/lib/PrivateRoute/PrivateRoute';
import Toast from 'shared/UI/Toaster/Toast';
import { Header } from 'widgets/Header';
import { useAppDispatch } from 'shared/lib/hooks/reduxHooks/reduxHooks';
import { initAuthData } from 'entities/User';

const App = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(initAuthData());
        }
    }, []);

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
