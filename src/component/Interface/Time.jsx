import React, {useState} from 'react';
import classes from "./Interface.module.css";
import MyModal from "../../UI/Modal/MyModal";

const Time = ({duration, changeTimeInSession, ...props}) => {

    const [modalMyTime, setMyTime] = useState(false);

    const handleOnClick = (id) => {
        changeTimeInSession(id);
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
             <div className={getClassName('15')} onClick={() => handleOnClick('15')}>0:15</div>
             <div className={getClassName('30')} onClick={() => handleOnClick('30')}>0:30</div>
             <div className={getClassName('60')} onClick={() => handleOnClick('60')}>1:00</div>
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
                               handleOnClick(value)}}

                       }
                    />
                </MyModal>
                :
             <></>}
         </div>
    );
};

export default Time;


