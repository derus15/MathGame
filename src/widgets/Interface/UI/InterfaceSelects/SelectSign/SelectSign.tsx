import React, { memo, ReactNode } from 'react';
import style from './SelectSign.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';
import { SignList } from 'app/types/config';

interface SelectProps {
    globalState?: SignList[];
    callback?: (a: string | number) => void;
    currentSign?: SignList;
    children?: ReactNode;
}

const SelectSign = ({ children = '', callback, currentSign, globalState = [] }: SelectProps) => {

    const isSelectedSigns = Boolean(globalState.includes(currentSign));

    return (
        <OutlineButton
            className={classNames(style.signs, { [style.signsActive]: isSelectedSigns }, [])}
            // @ts-ignore
            onClick={callback}
        >
            {children}
        </OutlineButton>
    );
};

export default memo(SelectSign);
