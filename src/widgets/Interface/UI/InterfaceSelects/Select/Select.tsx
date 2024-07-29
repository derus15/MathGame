import React, { memo, ReactNode } from 'react';
import style from './Select.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

interface SelectProps {
    globalState?: string | number;
    callback?: (a: string | number) => void;
    currentState?: string | number;
    isMods?: boolean;
    children?: ReactNode;
}

const Select = ({ children = style.select, currentState, callback, isMods, globalState }: SelectProps) => {

    const isActive = Boolean(globalState === currentState);

    return (
        <OutlineButton
            className={classNames(style.select, {
                [style.selectActive]: isActive,
                [style.selectMode]: isMods,
                [style.selectParams]: !isMods,
            }, [])}
            // @ts-ignore
            onClick={callback}
        >
            <span>
                {children}
            </span>
        </OutlineButton>
    );
};

export default memo(Select);
