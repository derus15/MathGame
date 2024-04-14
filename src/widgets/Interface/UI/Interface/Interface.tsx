import React, { memo } from 'react';
import style from './Interface.module.css';
import { ChangeMods } from '../ChangeParams/ChangeMods';
import { ChangeSigns } from '../ChangeParams/ChangeSigns';
import { Lines } from '../InterfaceLines/Lines';
import { ChangeModsParams } from '../ChangeParams/ChangeModsParams';

export const Interface = memo(() => (
    <div className={style.mainContainer}>
        <ChangeSigns />
        <ChangeMods />
        <Lines />
        <ChangeModsParams />
    </div>
));
