import React, {useState} from 'react';
import classes from "./Interface.module.css";
import MyModal from "../../UI/Modal/MyModal";
import {useDispatch, useSelector} from "react-redux";
import {changeNumber} from "../../redux/interfaceSlice/interfaceSlice";

const Number = ({sessionProgress}) => {

    const [modalMyNumber, setMyNumber] = useState(false);
    const duration = useSelector(state => state.interface.number);
    const dispatch = useDispatch();

    function changeNumberInSession(number){
        if (!sessionProgress) {
            dispatch(changeNumber(number));
            localStorage.setItem('durationNumber', number);
        }
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
         <div className={getClassName('10')} onClick={() => changeNumberInSession('10')}>10</div>
         <div className={getClassName('15')} onClick={() => changeNumberInSession('15')}>15</div>
         <div className={getClassName('20')} onClick={() => changeNumberInSession('20')}>20</div>
         <div className={classes.number} onClick={showModalMyNumber}>__</div>
         {(modalMyNumber)
            ?
            <MyModal
                visible={modalMyNumber} setVisible={setMyNumber}>
                Задайте собственное количество примеров:
                <input className={[classes.time, classes.modalInput].join(' ')} type="input"
                   onInput={(e) => {

                       const value = e.target.value;
                       const isNumber = /^(?!0$)\d+$|^(?:[1-9]\d*|0\d+)$/.test(value);

                       if (!isNumber) {
                           e.target.value = ''; }
                       else {
                            changeNumberInSession(value)}}
                   }
                />
            </MyModal>
            :
         <></>}
     </div>
    );
};

export default Number;