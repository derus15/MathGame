import React, { memo, ReactNode } from 'react';
import style from './SelectSign.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { SignList } from 'app/types/config';

interface SelectProps {
    globalState?: SignList[];
    callback?: (a: SignList[]) => void;
    currentSign?: SignList;
    children?: ReactNode;
}

const SelectSign = ({ children = '', callback, currentSign, globalState = [] }: SelectProps) => {

    const isSelectedSigns = Boolean(globalState.includes(currentSign));

    const changeSignList = () => {
        let newSignList: SignList[];

        if (globalState.includes(currentSign) && globalState.length > 1) {

            newSignList = globalState.filter((sign) => sign !== currentSign);

        } else if (!globalState.includes(currentSign)) {

            newSignList = [...globalState, currentSign];
        } else {

            newSignList = [...globalState];
        }

        callback(newSignList);
        localStorage.setItem('signList', JSON.stringify(newSignList));
    };
    
    return (
        <OutlineButton
            className={classNames(style.signs, { [style.signsActive]: isSelectedSigns }, [])}
            onClick={changeSignList}
        >
            {children}
        </OutlineButton>
    );
};

export default memo(SelectSign);
