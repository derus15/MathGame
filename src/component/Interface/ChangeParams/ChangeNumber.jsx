import React from 'react';
import classes from '../Interface.module.css';
import { useDispatch } from 'react-redux';
import { changeNumber } from '../../../redux/Slices/frontSlices/interfaceSlice';
import MyNumber from '../MyParams/MyNumber';
import SelectNumber from '../../../UI/InterfaceSelects/SelectNumber/SelectNumber';

const ChangeNumber = ({ sessionProgress }) => {

    const dispatch = useDispatch();

    function changeNumberInSession(number) {
        if (!sessionProgress) {
            dispatch(changeNumber(number));
        }
    }

    return (
        <div className={classes.containerNumber}>
            <SelectNumber number={10} onClick={() => changeNumberInSession(10)}>10</SelectNumber>
            <SelectNumber number={15} onClick={() => changeNumberInSession(15)}>15</SelectNumber>
            <SelectNumber number={20} onClick={() => changeNumberInSession(20)}>20</SelectNumber>
            <MyNumber sessionProgress={sessionProgress} changeNumberInSession={changeNumberInSession} />
        </div>
    );
};

export default ChangeNumber;