import React from 'react';
import style from "./MyInput.module.css";

const MyInput = ({...props}) => {
    return (
        <div>
            <input
                type={"number"}
                className={style.npt}
                {...props}
            />
        </div>
    );
};

export default MyInput;