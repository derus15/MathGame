import React, { memo } from 'react';
import style from './Interface.module.css';
import ChangeModes from '../ChangeParams/ChangeMods';
import ChangeSigns from '../ChangeParams/ChangeSigns';
import Lines from '../InterfaceLines/Lines';
import ChangeTimeNumber from '../ChangeParams/ChangeModsParams';

export const Interface = memo(() => (
    <div className={style.center} data-testid="interface">
        <div className={style.mainContainer}>
            <ChangeSigns />
            <ChangeModes />
            <Lines />
            <ChangeTimeNumber />
        </div>
    </div>
));
