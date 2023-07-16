import React from 'react';
import classes from './MyButton.module.css';

const MyButton = ({ children, random= false, ...props }) => {

    if (random) {
        let textList = ['Хорошо', 'Ладно', 'Понятно', 'Прекрасно'];
        children = textList[Math.floor(Math.random() * textList.length)];
    }

    return (
        <div>
            <button className={classes.btn} {...props}>{children}</button>
        </div>
    );
};

export default MyButton;