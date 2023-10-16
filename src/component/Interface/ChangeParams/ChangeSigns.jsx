import React from 'react';
import classes from '../Interface.module.css';
import { addSign, deleteSign } from '../../../redux/Slices/frontSlices/interfaceSlice';
import { useDispatch, useSelector } from 'react-redux';
import SelectSign from '../../../UI/InterfaceSelects/SelectSign/SelectSign';

const ChangeSigns = ({ sessionProgress }) => {

    const dispatch = useDispatch();
    const signs = useSelector(state => state.interface.signList);

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
            <SelectSign sign='+' onClick={() => changeSignInSession('+')}>+</SelectSign>
            <SelectSign sign='-' onClick={() => changeSignInSession('-')}>-</SelectSign>
            <SelectSign sign='*' onClick={() => changeSignInSession('*')}>x</SelectSign>
            <SelectSign sign='/' onClick={() => changeSignInSession('/')}>/</SelectSign>
        </div>
    );
};

export default ChangeSigns;