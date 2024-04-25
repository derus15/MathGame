import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import SelectSign from '../InterfaceSelects/SelectSign/SelectSign';
import { SignList } from 'app/types/config';
import { getInterfaceSignsList } from '../../model/selectors/getInterfaceSignsList';
import { useRefreshExample } from 'entities/Example';
import { getSessionProgress } from 'entities/Session';

export const ChangeSigns = memo(() => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const signsList: SignList[] = ['+', '-', '*', '/'];
    const currentSigns = useSelector(getInterfaceSignsList);
    const { refreshExample } = useRefreshExample();

    function changeSignInSession(sign: SignList) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeSign(sign));
        }
    }

    useEffect(() => {
        refreshExample();
    }, [currentSigns]);
    
    return (
        <div className={style.containerSigns}>
            {signsList.map((sign: SignList) => (

                <SelectSign
                    currentSign={sign}
                    globalState={currentSigns}
                    callback={() => changeSignInSession(sign)}
                >
                    {sign === '*' ? 'x' : sign}
                </SelectSign>

            ))}
        </div>
    );
});
