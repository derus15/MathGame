import React, {useEffect} from 'react';
import classes from "./Interface.module.css";
import {addSign, deleteSign} from "../../redux/interfaceSlice/interfaceSlice";
import {useDispatch, useSelector} from "react-redux";

const Signs = ({sessionProgress}) => {

    const dispatch = useDispatch();
    const signs = useSelector(state => state.interface.signList);

    function addSignInSession(id) {
        if (!sessionProgress) {
            if (signs.includes(id) && signs.length > 1) {
                dispatch(deleteSign(id));
            } else if (!signs.includes(id)) {
                dispatch(addSign(id));
            }
        }
    }

    const getClassName = (id) => {
        if (signs.includes(id)) {
            return `${classes.signs} ${classes.signsActive}`;
            }
        return classes.signs;
    }

    return (
        <div className={classes.containerSigns}>
            <div className={getClassName('+')} onClick={() => (addSignInSession('+'))}>+</div>
            <div className={getClassName('-')} onClick={() => (addSignInSession('-'))}>-</div>
            <div className={getClassName('*')} onClick={() => (addSignInSession('*'))}>x</div>
            <div className={getClassName('/')} onClick={() => (addSignInSession('/'))}>/</div>
        </div>
    );
};

export default Signs;