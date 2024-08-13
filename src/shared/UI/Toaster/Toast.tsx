import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import style from './Toaster.module.css';
import { Portal } from 'shared/UI/Portal/Portal';

export const Toast = () => (

    <Portal>
        <ToastContainer
            className={style.toast}
            position="top-center"
            draggable
            autoClose={1500}
            theme="dark"
        />
    </Portal>

);
