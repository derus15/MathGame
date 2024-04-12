import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import SelectSign from '../InterfaceSelects/SelectSign/SelectSign';
import { SignList } from 'app/types/config';
import { getInterfaceSignsList } from '../../model/selectors/getInterfaceSignsList';
import { useRefreshExample } from 'entities/Example';
import { getSessionProgress } from 'entities/Session';

const ChangeSigns = () => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const signs = useSelector(getInterfaceSignsList);
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
            <SelectSign
                currentSign="+"
                globalState={signs}
                callback={() => changeSignInSession('+')}
            >
                +
            </SelectSign>
            <SelectSign
                currentSign="-"
                globalState={signs}
                callback={() => changeSignInSession('-')}
            >
                -
            </SelectSign>
            <SelectSign
                currentSign="*"
                globalState={signs}
                callback={() => changeSignInSession('*')}
            >
                x
            </SelectSign>
            <SelectSign
                currentSign="/"
                globalState={signs}
                callback={() => changeSignInSession('/')}
            >
                /
            </SelectSign>
        </div>
    );
};

export default memo(ChangeSigns);
