import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'app/App';
import { store } from 'app/Providers/Store/store';
import ErrorBoundary from 'app/Providers/ErrorBoundary/ErrorBoundary';
import { Toast } from 'shared/UI/Toaster/Toast';
import { AppInit } from 'app/Providers/AppInit/AppInit';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ErrorBoundary>
                <Toast />
                <AppInit>
                    <App />
                </AppInit>
            </ErrorBoundary>
        </BrowserRouter>
    </Provider>,
);
