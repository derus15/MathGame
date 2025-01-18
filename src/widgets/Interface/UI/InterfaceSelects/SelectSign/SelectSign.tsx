import React, { memo, ReactNode } from 'react';
import style from './SelectSign.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { Sign } from 'app/types/config';

interface SelectProps {
    globalState?: Sign[];
    callback?: (a: Sign[]) => void;
    currentSign?: Sign;
    children?: ReactNode;
}

const SelectSign = ({ children = '', callback, currentSign, globalState = [] }: SelectProps) => {

    const isSelectedSigns = Boolean(globalState.includes(currentSign));

    const changeSignList = () => {
        let newSignList: Sign[];

        if (globalState.includes(currentSign)) {
            
            newSignList = globalState.length > 1 ? globalState.filter((sign) => sign !== currentSign)
                : [...globalState];
        } else {
            
            newSignList = [...globalState, currentSign];
        }

        callback(newSignList);
        localStorage.setItem('signList', JSON.stringify(newSignList));
    };
    
    return (
        <OutlineButton
            className={classNames(style.signs, { [style.signsActive]: isSelectedSigns })}
            onClick={changeSignList}
        >
            {children}
        </OutlineButton>
    );
};

export default memo(SelectSign);
