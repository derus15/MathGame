import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from '../Interface.module.css';
import { interfaceActions } from '../../../redux/Slices/frontSlices/interface/interfaceSlice';
import SelectSign from '../../../UI/InterfaceSelects/SelectSign/SelectSign';
import { StateSchema } from '../../../redux/types';
import { SignList } from '../../../types/config';

const ChangeSigns = () => {
    const dispatch = useDispatch();
    const signs = useSelector((state: StateSchema) => state.interface.signList);
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);

    function changeSignInSession(sign: SignList) {
        if (!sessionProgress) {
            if (signs.includes(sign) && signs.length > 1) {
                dispatch(interfaceActions.deleteSign(sign));
            } else if (!signs.includes(sign)) {
                dispatch(interfaceActions.addSign(sign));
            }
        }
    }

    return (
        <div className={classes.containerSigns}>
            <SelectSign sign="+" callback={() => changeSignInSession('+')}>+</SelectSign>
            <SelectSign sign="-" callback={() => changeSignInSession('-')}>-</SelectSign>
            <SelectSign sign="*" callback={() => changeSignInSession('*')}>x</SelectSign>
            <SelectSign sign="/" callback={() => changeSignInSession('/')}>/</SelectSign>
        </div>
    );
};

export default ChangeSigns;