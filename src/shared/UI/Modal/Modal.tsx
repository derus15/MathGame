import React, { Dispatch, FC, memo, ReactNode, SetStateAction } from 'react';
import style from './Modal.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface modalProps {
    children?: ReactNode,
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>
    className?: string;
}

const Modal:FC<modalProps> = ({ children, visible, setVisible, className }) => (

    visible && (
        <div
            className={classNames(style.myModal, { [style.myModalActive]: visible })}
            onClick={() => setVisible(false)}
        >
            <div
                className={classNames(style.myModalContent, {}, [className])}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    )
);

export default memo(Modal);
