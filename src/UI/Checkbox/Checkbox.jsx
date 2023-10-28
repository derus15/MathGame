import React from 'react';
import style from './Checkbox.module.css';

const Checkbox = ({ label, checked, setIsChecked }) => (
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

export default Checkbox;
