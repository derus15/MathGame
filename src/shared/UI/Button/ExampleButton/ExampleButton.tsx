import React, { ButtonHTMLAttributes, FC } from 'react';
import style from './ExampleButton.module.css';
import { classNames } from 'shared/lib/classNames/classNames';

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    random?: boolean,
    className?: string,
}

export const ExampleButton: FC<buttonProps> = ({ 
    className, 
    children = 'Кнопка',
    random = false,
    ...props
}) => {

    if (random) {
        const textList = ['Хорошо', 'Ладно', 'Понятно', 'Прекрасно', 'Великолепно', 'Превосходно'];
        children = textList[Math.floor(Math.random() * textList.length)];
    }

    return (
        <div>
            <button type="button" className={classNames(style.btn, {}, [className])} {...props}>
                {children}
            </button>
        </div>
    );
};
