import React, { FC, ReactNode } from 'react';
import classes from './ExampleButton.module.css';

interface buttonProps {
    children?: ReactNode,
    random?: boolean,
}

const ExampleButton:FC<buttonProps> = ({ children, random = false, ...props }) => {
    if (random) {
        const textList = ['Хорошо', 'Ладно', 'Понятно', 'Прекрасно'];
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
