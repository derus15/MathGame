import React from 'react';
import classes from "../Interface.module.css";
import MyModal from "../../../UI/Modal/MyModal";
import {changeTime} from "../../../redux/Slices/interfaceSlice";
import {useDispatch} from "react-redux";

const MyTime = ({modalMyTime, setMyTime, sessionProgress}) => {

    const dispatch = useDispatch();

    function changeTimeInSession(time) {
        if (!sessionProgress) {
            dispatch(changeTime(time))
            localStorage.setItem('durationTime', time);
        }
    }

    return (
        <>
            {(modalMyTime) && (
                 <MyModal
                    visible={modalMyTime} setVisible={setMyTime} >
                    Задайте собственное время сессии:
                        <input autoFocus={true} className={[classes.time, classes.modalInput].join(' ')} type="input"
                            onInput={(e) => {

                               const value = e.target.value;
                               const isNumber = /^(?!0$)\d+$|^(?:[1-9]\d*|0\d+)$/.test(value);

                               if (!isNumber) {
                                   e.target.value = '';
                               } else {
                                   changeTimeInSession(value)}}
                            }
                        />
                 </MyModal>
             )}
        </>
    );
};

export default MyTime;