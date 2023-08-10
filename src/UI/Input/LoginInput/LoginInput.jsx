import React from 'react';
import style from './LoginInput.module.css';

const LoginInput = React.forwardRef(({ name, ...props }, ref) => {

    return (
        <div>
            <input className={style.npt} {...props} ref={ref} name={name} autoComplete={'off'} />
        </div>
    );
});

export default LoginInput;