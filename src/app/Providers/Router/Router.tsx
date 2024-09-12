import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Auth } from 'pages/Auth';
import { PrivateRoute } from 'shared/lib/PrivateRoute/PrivateRoute';
import { Account } from 'pages/Account';
import { NotFound } from 'pages/NotFound';

export const AppRouter = () => (
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
);
