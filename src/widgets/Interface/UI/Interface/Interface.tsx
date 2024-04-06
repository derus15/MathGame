import React, { memo } from 'react';
import style from './Interface.module.css';
import ChangeModes from '../ChangeParams/ChangeModes';
import ChangeSigns from '../ChangeParams/ChangeSigns';
import Lines from '../InterfaceLines/Lines';
import ChangeTimeNumber from '../ChangeParams/ChangeModesParams';

export const Interface = memo(() => (
    <div className={style.center}>
        <div className={style.mainContainer}>
            <ChangeSigns />
            <ChangeModes />
            <Lines />
            <ChangeTimeNumber />
        </div>
    </div>
));
