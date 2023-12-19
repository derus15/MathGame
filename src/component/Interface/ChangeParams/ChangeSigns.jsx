import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../Interface.module.css';
import { addSign, deleteSign } from '../../../redux/Slices/frontSlices/interfaceSlice';
import SelectSign from '../../../UI/InterfaceSelects/SelectSign/SelectSign';

const ChangeSigns = () => {
    const dispatch = useDispatch();
    const signs = useSelector((state) => state.interface.signList);
    const sessionProgress = useSelector((state) => state.activities.sessionProgress);

    function changeSignInSession(sign) {
        if (!sessionProgress) {
            if (signs.includes(sign) && signs.length > 1) {
                dispatch(deleteSign(sign));
            } else if (!signs.includes(sign)) {
                dispatch(addSign(sign));
            }
        }
    }

    return (
        <div className={classes.containerSigns}>
            <SelectSign sign="+" onClick={() => changeSignInSession('+')}>+</SelectSign>
            <SelectSign sign="-" onClick={() => changeSignInSession('-')}>-</SelectSign>
            <SelectSign sign="*" onClick={() => changeSignInSession('*')}>x</SelectSign>
            <SelectSign sign="/" onClick={() => changeSignInSession('/')}>/</SelectSign>
        </div>
    );
};

export default ChangeSigns;
