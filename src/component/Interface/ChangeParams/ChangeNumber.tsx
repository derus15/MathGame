import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from '../Interface.module.css';
import { interfaceActions } from '../../../redux/Slices/frontSlices/interface/interfaceSlice';
import MyNumber from '../MyParams/MyNumber';
import SelectNumber from '../../../UI/InterfaceSelects/SelectNumber/SelectNumber';
import { StateSchema } from '../../../redux/types';

const ChangeNumber = () => {
    const dispatch = useDispatch();
    const sessionProgress = useSelector((state: StateSchema) => state.activities.sessionProgress);

    function changeNumberInSession(number:number) {
        if (!sessionProgress) {
            dispatch(interfaceActions.changeNumber(number));
        }
    }

    return (
        <div className={style.containerNumber}>
            <SelectNumber number={10} callback={() => changeNumberInSession(10)}>10</SelectNumber>
            <SelectNumber number={15} callback={() => changeNumberInSession(15)}>15</SelectNumber>
            <SelectNumber number={20} callback={() => changeNumberInSession(20)}>20</SelectNumber>
            <MyNumber standardNumber={[10, 15, 20]} changeNumberInSession={changeNumberInSession} />
        </div>
    );
};

export default ChangeNumber;
