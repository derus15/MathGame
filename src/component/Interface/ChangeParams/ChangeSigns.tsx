import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface.module.css';
import { interfaceActions } from '../../../redux/Slices/frontSlices/interface/interfaceSlice';
import SelectSign from '../../../UI/InterfaceSelects/SelectSign/SelectSign';
import { StateSchema } from '../../../redux/types';
import { SignList } from '../../../types/config';

const ChangeSigns = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);

    function changeSignInSession(sign: SignList) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeSign(sign));
        }
    }

    return (
        <div className={style.containerSigns}>
            <SelectSign sign="+" callback={() => changeSignInSession('+')}>+</SelectSign>
            <SelectSign sign="-" callback={() => changeSignInSession('-')}>-</SelectSign>
            <SelectSign sign="*" callback={() => changeSignInSession('*')}>x</SelectSign>
            <SelectSign sign="/" callback={() => changeSignInSession('/')}>/</SelectSign>
        </div>
    );
};

export default ChangeSigns;
