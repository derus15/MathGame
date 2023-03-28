import React from 'react';
import style from "./MyInput.module.css";

const MyInput = ({...props}) => {

    return (
        <div>
            <input
                onChange={(e) => {
                    const value = e.target.value;
                    const isNumber = /^[0-9]+$/.test(value);
                    if (!isNumber) {
                        e.target.value = '';}
                    }
                }
                className={style.npt}
                {...props}/>
        </div>
    );
};

export default MyInput;
