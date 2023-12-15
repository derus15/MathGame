import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import classes from './Toaster.module.css';

const Toast = () => (

    <ToastContainer
        className={classes.toast}
        position="top-center"
        autoClose={1500}
        theme="dark"
    />
);

export default Toast;