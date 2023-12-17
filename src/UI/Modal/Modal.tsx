import React, { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import style from './Modal.module.css';
import { classNames } from '../../helpers/classNames/classNames';

interface modalProps {
    children?: ReactNode,
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>
}

const Modal:FC<modalProps> = ({ children, visible, setVisible }) => (

    <div
        className={classNames(style.myModal, { [style.myModalActive]: visible }, [])}
        onClick={() => setVisible(false)}
    >
        <div className={style.myModalContent} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
);

export default Modal;
