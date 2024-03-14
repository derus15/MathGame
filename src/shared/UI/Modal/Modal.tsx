import React, { Dispatch, FC, memo, ReactNode, SetStateAction, useEffect } from 'react';
import style from './Modal.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import Cross from '/public/assets/cross.svg';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

interface modalProps {
    children?: ReactNode,
    visible: boolean,
    setVisible: Dispatch<SetStateAction<boolean>>
    className?: string;
}

const Modal:FC<modalProps> = ({ children, visible, setVisible, className }) => {

    const handleCloseModalKeyboard = (e: KeyboardEvent) => {
        if (visible && e.key === 'Escape') {
            setVisible(false);
        }
    };
    
    const handleCloseModal = () => {
        setVisible(false);
    };
    
    useEffect(() => {
        window.addEventListener('keydown', handleCloseModalKeyboard);
        return () => {
            window.removeEventListener('keydown', handleCloseModalKeyboard);
        };
    }, [visible]);
    
    return (   
        visible && (
            <div
                className={classNames(style.myModal, { [style.myModalActive]: visible })}
                onClick={handleCloseModal}
            >
                <div
                    className={classNames(style.myModalContent, {}, [className])}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
                <OutlineButton onClick={handleCloseModal} className={style.closeCrossButton}>
                    <Cross className={style.closeCross} />
                </OutlineButton>
            </div>
        ));

};

export default memo(Modal);
