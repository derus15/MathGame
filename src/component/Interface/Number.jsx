import React, {useState} from 'react';
import classes from "./Interface.module.css";
import MyModal from "../../UI/Modal/MyModal";

const Number = ({duration, changeNumberInSession}) => {

    const [modalMyNumber, setMyNumber] = useState(false);

    const handleOnClick = (id) => {
        changeNumberInSession(id);
    }

    const getClassName = (id) => {
        if (String(duration) === id) {
            return `${classes.number} ${classes.numberActive}`;
        }
        return classes.number;
    }

    const showModalMyNumber = () => {
        setMyNumber(true);
    }


    return (
     <div className={classes.containerNumber}>
         <div className={getClassName('10')} onClick={() => handleOnClick('10')}>10</div>
         <div className={getClassName('15')} onClick={() => handleOnClick('15')}>15</div>
         <div className={getClassName('20')} onClick={() => handleOnClick('20')}>20</div>
         <div className={classes.time} onClick={showModalMyNumber}>__</div>
         {(modalMyNumber)
            ?
            <MyModal
                visible={modalMyNumber} setVisible={setMyNumber}>
                Задайте собственное время сессии:
                <input className={[classes.time, classes.modalInput].join(' ')} type="input"
                       onInput={(e) => {
                       const value = e.target.value;
                       const isNumber = /^(?!0$)\d+$|^(?:[1-9]\d*|0\d+)$/.test(value);
                       if (!isNumber) {
                           e.target.value = ''; }
                       else {
                            handleOnClick(value)}}
                       }/>
            </MyModal>
            :
         <></>}
     </div>
    );
};

export default Number;