import React from 'react';
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
        <div>
            <button className={classes.btn} {...props}>{children}</button>
        </div>
    );
};

export default MyButton;