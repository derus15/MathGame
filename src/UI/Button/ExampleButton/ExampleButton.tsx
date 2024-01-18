import React, { ButtonHTMLAttributes, FC } from 'react';
import style from './ExampleButton.module.css';
import { classNames } from 'helpers/classNames/classNames';

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    random?: boolean,
    className?: string,
}

const ExampleButton:FC<buttonProps> = ({ className, children, random = false, ...props }) => {

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

export default ExampleButton;
