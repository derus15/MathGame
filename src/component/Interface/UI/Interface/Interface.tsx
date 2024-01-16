import React from 'react';
import style from './Interface.module.css';
import ChangeModes from '../ChangeParams/ChangeModes';
import ChangeSigns from '../ChangeParams/ChangeSigns';
import Lines from '../../../../UI/Lines/Lines';
import ChangeTimeNumber from '../ChangeParams/ChangeTimeNumber';

export const Interface = () => (
    <div className={style.center}>
        <div className={style.mainContainer}>
            <ChangeSigns />
            <ChangeModes />
            <Lines />
            <ChangeTimeNumber />
        </div>
    </div>
);
