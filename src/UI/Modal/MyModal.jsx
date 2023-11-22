import React from 'react';
import style from './MyModal.module.css';
import { classNames } from '../../helpers/classNames';

const MyModal = ({ children, visible, setVisible }) => (

    <div
        className={classNames(style.myModal, { [style.myModalActive]: visible }, [])}
        onClick={() => setVisible(false)}
    >
        <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
);

export default MyModal;
