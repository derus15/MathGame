import React, { ReactNode } from 'react';
import style from './Select.module.css';
import { classNames } from '../../../../../helpers/classNames/classNames';
import { OutlineButton } from '../../../../../UI/Button/OutlineButton/OutlineButton';

interface SelectProps {
    globalState?: string | number;
    callback?: (a: string | number) => void;
    params?: string | number;
    children?: ReactNode;
}

const Select = ({ children = '', params, callback, globalState }: SelectProps) => {

    const isActive = Boolean(globalState === params);

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

export default Select;
