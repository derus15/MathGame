import React, { ButtonHTMLAttributes, FC } from 'react';
import style from './ExampleButton.module.css';

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    random?: boolean,
}

const ExampleButton:FC<buttonProps> = ({ children, random = false, ...props }) => {

    if (random) {
        const textList = ['Хорошо', 'Ладно', 'Понятно', 'Прекрасно', 'Великолепно', 'Превосходно'];
        children = textList[Math.floor(Math.random() * textList.length)];
    }

    return (
        <div>
            <button type="button" className={style.btn} {...props}>
                {children}
            </button>
        </div>
    );
};

export default ExampleButton;
