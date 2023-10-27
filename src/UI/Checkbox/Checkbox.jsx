import React from 'react';
import style from './Checkbox.module.css';

function Checkbox({ label, checked, setIsChecked }) {
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
}

export default Checkbox;
