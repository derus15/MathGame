import React, { memo, ReactNode } from 'react';
import style from './Select.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

interface SelectProps {
    globalState?: string | number;
    callback?: (a: string | number) => void;
    currentState?: string | number;
    children?: ReactNode;
}

const Select = ({ children = '', currentState, callback, globalState }: SelectProps) => {

    const isActive = Boolean(globalState === currentState);

    return (
        <OutlineButton
            className={classNames(style.element, { [style.elementActive]: isActive }, [])}
            // @ts-ignore
            onClick={callback}
        >
            {children}
        </OutlineButton>
    );
};

export default memo(Select);
