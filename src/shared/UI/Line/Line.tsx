import React, { memo } from 'react';
import style from './Line.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface LineProps {
    className: string,
    onClick: () => void,
}

export const Line = memo(({ className, onClick }: LineProps) => (
    
    <div className={classNames(style.Line, {}, [className])} onClick={onClick} />
    
));
