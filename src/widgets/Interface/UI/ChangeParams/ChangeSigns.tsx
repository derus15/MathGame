import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface/Interface.module.css';
import SelectSign from '../InterfaceSelects/SelectSign/SelectSign';
import { Sign } from 'app/types/config';
import { getSessionProgress } from 'entities/Session';
import { exampleActions, getExampleSignList } from 'entities/Example';

export const ChangeSigns = memo(() => {

    const dispatch = useDispatch();
    const sessionProgress = useSelector(getSessionProgress);
    const signsList: Sign[] = ['+', '-', '*', '/'];
    const currentSigns = useSelector(getExampleSignList);

    function changeSignInSession(signList: Sign[]) {
        if (!sessionProgress) {
            dispatch(exampleActions.setSignList(signList));
            dispatch(exampleActions.generateSeed());
        }
    }
    
    return (
        <div className={style.containerSigns}>
            {signsList.map((sign: Sign) => (

                <SelectSign
                    key={sign}
                    currentSign={sign}
                    globalState={currentSigns}
                    callback={changeSignInSession}
                >
                    {sign === '-' ? '–' : sign === '*' ? 'x' : sign}
                </SelectSign>

            ))}
        </div>
    );
});
