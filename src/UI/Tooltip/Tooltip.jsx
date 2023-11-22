import React, { useEffect } from 'react';

import classes from './Tooltip.module.css';

const Tooltip = ({ children, condition, depend, setShow }) => {

    useEffect(() => {
        if (condition) {
            setShow(true);

            setTimeout(() => {
                setShow(false);
            }, 2300);
        }
    }, [depend]);

    return (
        <div className={classes.container}>
            <div className={classes.support}>{children}</div>
        </div>
    );
};

export default Tooltip;
