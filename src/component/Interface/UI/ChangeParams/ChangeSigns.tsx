import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import SelectSign from '../InterfaceSelects/SelectSign/SelectSign';
import { StateSchema } from 'redux/types';
import { SignList } from 'app/types/config';
import { getSignsList } from '../../model/selectors/getSignsList';
import { useRefreshExample } from 'component/Example';

const ChangeSigns = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);
    const signs = useSelector(getSignsList);
    const { refreshExample } = useRefreshExample();

    function changeSignInSession(sign: SignList) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeSign(sign));
        }
    }

    useEffect(() => {
        refreshExample();
    }, [signs]);
    
    return (
        <div className={style.containerSigns}>
            <SelectSign sign="+" globalState={signs} callback={() => changeSignInSession('+')}>+</SelectSign>
            <SelectSign sign="-" globalState={signs} callback={() => changeSignInSession('-')}>-</SelectSign>
            <SelectSign sign="*" globalState={signs} callback={() => changeSignInSession('*')}>x</SelectSign>
            <SelectSign sign="/" globalState={signs} callback={() => changeSignInSession('/')}>/</SelectSign>
        </div>
    );
};

export default ChangeSigns;
