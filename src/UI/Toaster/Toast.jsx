import 'react-toastify/dist/ReactToastify.css';
import classes from '../../UI/Toaster/Toaster.module.css';
import { ToastContainer } from 'react-toastify';

import React from 'react';

const Toast = () => {

    return (
        <ToastContainer
            className={classes.toast}
            position='top-center'
            autoClose={1500}
            theme={'dark'}
        />
    );
};

export default Toast;