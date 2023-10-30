import React from 'react';
import style from './Interface.module.css';
import ChangeModes from './ChangeParams/ChangeModes';
import ChangeSigns from './ChangeParams/ChangeSigns';
import Lines from './Lines/Lines';
import ChangeTimeNumber from './ChangeParams/ChangeTimeNumber';

const Interface = ({ sessionProgress }) => (
    <div className={style.center}>
        <div className={style.mainContainer}>
            <ChangeTimeNumber sessionProgress={sessionProgress} />
            <ChangeSigns sessionProgress={sessionProgress} />
            <Lines />
            <ChangeModes sessionProgress={sessionProgress} />
        </div>
    </div>
);

export default Interface;
