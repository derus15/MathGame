import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import { interfaceActions } from '../../model/slice/interfaceSlice';
import SelectSign from '../InterfaceSelects/SelectSign/SelectSign';
import { SignList } from 'app/types/config';
import { getInterfaceSignsList } from '../../model/selectors/getInterfaceSignsList';
import { getSessionProgress } from 'entities/Session';
import { exampleActions } from 'entities/Example';

export const ChangeSigns = memo(() => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const signsList: SignList[] = ['+', '-', '*', '/'];
    const currentSigns = useSelector(getInterfaceSignsList);

    function changeSignInSession(sign: SignList) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeSign(sign));
            dispatch(exampleActions.generateSeed());
        }
    }
    
    return (
        <div className={style.containerSigns}>
            {signsList.map((sign: SignList) => (

                <SelectSign
                    key={sign}
                    currentSign={sign}
                    globalState={currentSigns}
                    callback={() => changeSignInSession(sign)}
                >
                    {sign === '-' ? '–' : sign === '*' ? 'x' : sign}
                </SelectSign>

            ))}
        </div>
    );
});
