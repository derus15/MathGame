import React, {useState} from 'react';
import classes from "./Interface.module.css";
import MyModal from "../../UI/Modal/MyModal";
import {useDispatch, useSelector} from "react-redux";
import {changeTime} from "../../redux/interfaceSlice/interfaceSlice";

const Time = ({sessionProgress}) => {

    const [modalMyTime, setMyTime] = useState(false);
    const duration = useSelector(state => state.interface.time);
    const dispatch = useDispatch();

    function changeTimeInSession(time) {
        if (!sessionProgress) {
            dispatch(changeTime(time))
            localStorage.setItem('durationTime', time);
        }
    }

    const getClassName = (id) => {
        if (String(duration) === id) {
            return `${classes.time} ${classes.timeActive}`;
        }
        return classes.time;
    }

    const showModalMyTime = () => {
        setMyTime(true)
    }

    return (
         <div className={classes.containerTime}>
             <div className={getClassName('15')} onClick={() => changeTimeInSession('15')}>0:15</div>
             <div className={getClassName('30')} onClick={() => changeTimeInSession('30')}>0:30</div>
             <div className={getClassName('60')} onClick={() => changeTimeInSession('60')}>1:00</div>
             <div className={getClassName()} onClick={showModalMyTime}>__</div>
             {(modalMyTime)
                ?
                <MyModal visible={modalMyTime} setVisible={setMyTime} >
                    Задайте собственное время сессии:
                    <input className={[classes.time, classes.modalInput].join(' ')} type="input"
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
                :
             <></>}
         </div>
    );
};

export default Time;


