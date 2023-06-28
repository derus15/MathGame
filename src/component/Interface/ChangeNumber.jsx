import React, {useState} from 'react';
import classes from "./Interface.module.css";
import {useDispatch, useSelector} from "react-redux";
import {changeNumber} from "../../redux/interfaceSlice/interfaceSlice";
import MyNumber from "./MyNumber";

const ChangeNumber = ({sessionProgress}) => {

    const [modalMyNumber, setMyNumber] = useState(false);
    const duration = useSelector(state => state.interface.number);
    const dispatch = useDispatch();

    function changeNumberInSession(number){
        if (!sessionProgress) {
            dispatch(changeNumber(number));
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
         <MyNumber modalMyNumber={modalMyNumber} setMyNumber={setMyNumber} sessionProgress={sessionProgress}/>
     </div>
    );
};

export default ChangeNumber;