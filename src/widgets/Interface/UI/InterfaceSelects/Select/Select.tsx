import React, { memo, ReactNode } from 'react';
import style from './Select.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { OutlineButton } from 'shared/UI/Button/OutlineButton/OutlineButton';

interface SelectProps {
    isActive?: boolean
    callback?: (a: string | number) => void;
    isMods?: boolean;
    children?: ReactNode;
}

const Select = ({ children = style.select, isActive, callback, isMods }: SelectProps) => (
    <OutlineButton
        className={classNames(style.select, {
            [style.selectActive]: isActive,
            [style.selectMode]: isMods,
            [style.selectParams]: !isMods,
        })}
        // @ts-ignore
        onClick={callback}
    >
        <span>
            {children}
        </span>
    </OutlineButton>
);

export default memo(Select);
