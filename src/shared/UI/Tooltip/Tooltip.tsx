import React, { Dispatch, FC, SetStateAction, useEffect } from 'react';
import style from './Tooltip.module.css';

interface tooltipProps {
    children: string,
    condition: boolean,
    depend: string,
    setShow: Dispatch<SetStateAction<boolean>>
}

const Tooltip:FC<tooltipProps> = ({ children, condition, depend, setShow }) => {

    useEffect(() => {
        if (condition) {
            setShow(true);

            setTimeout(() => {
                setShow(false);
            }, 2300);
        }
    }, [depend]);

    return (
        <div className={style.container}>
            <div className={style.support}>{children}</div>
        </div>
    );
};

export default Tooltip;
