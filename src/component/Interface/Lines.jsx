import React, {useState} from 'react';
import classes from "./Interface.module.css";

const Lines = () => {

    const [rotate, setRotate] = useState(false);

    function handleClick(){
        setRotate(!rotate);
    }

    function rotation(){
        if (rotate){
            return `${classes.verticalLine} ${classes.rotateLine}`
        }
        return classes.verticalLine
    }

    return (
        <div className={classes.containerLines}>
            <div className={rotation()} onClick={handleClick}></div>
            <div className={rotation()} onClick={handleClick}></div>
        </div>
    );
};

export default Lines;