import React from 'react';
import MyModal from "../../../UI/Modal/MyModal";
import classes from "../Interface.module.css";
import {changeNumber} from "../../../redux/Slices/interfaceSlice";
import {useDispatch} from "react-redux";

const MyNumber = ({modalMyNumber, setMyNumber, sessionProgress}) => {

    const dispatch = useDispatch();

    function changeNumberInSession(number){
        if (!sessionProgress) {
            dispatch(changeNumber(number));
            localStorage.setItem('durationNumber', number);
        }
    }

    return (
        <>
            {(modalMyNumber) && (
                <MyModal
                    visible={modalMyNumber} setVisible={setMyNumber}>
                    Задайте собственное количество примеров:
                        <input autoFocus={true} className={[classes.time, classes.modalInput].join(' ')} type="input"
                           onInput={(e) => {

                               const value = e.target.value;
                               const isNumber = /^(?!0$)\d+$|^(?:[1-9]\d*|0\d+)$/.test(value);

                               if (!isNumber) {
                                   e.target.value = '';
                               } else {
                                    changeNumberInSession(value)}}
                           }
                        />
                </MyModal>
            )}
        </>
    );
};

export default MyNumber;