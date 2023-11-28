import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classes from './ExampleButton.module.css';

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode,
    random?: boolean,
}

const ExampleButton:FC<buttonProps> = ({ children, random = false, ...props }) => {

    if (random) {
        const textList = ['Хорошо', 'Ладно', 'Понятно', 'Прекрасно', 'Великолепно', 'Превосходно'];
        children = textList[Math.floor(Math.random() * textList.length)];
    }

    return (
        <div>
            <button type="button" className={classes.btn} {...props}>
                {children}
            </button>
        </div>
    );
};

export default ExampleButton;
