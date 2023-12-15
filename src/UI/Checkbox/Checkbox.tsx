import React, { Dispatch, SetStateAction } from 'react';
import style from './Checkbox.module.css';

interface checkboxProps {
    label: string,
    checked: boolean,
    setIsChecked: Dispatch<SetStateAction<boolean>>,
}

const Checkbox = (props: checkboxProps) => {
    
    const {
        label,
        checked,
        setIsChecked,
    } = props;

    return (
        <div>
            <label className={style.checkbox}>
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => setIsChecked((prev) => !prev)}
                />
                <span className={style.span}>{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;
