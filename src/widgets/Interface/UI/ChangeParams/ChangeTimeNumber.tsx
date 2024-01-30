import React from 'react';
import { useSelector } from 'react-redux';
import ChangeTime from './ChangeTime';
import ChangeNumber from './ChangeNumber';
import { getGameMod } from '../../model/selectors/getGameMod';

const ChangeTimeNumber = () => {

    const gameMode = useSelector(getGameMod);

    return gameMode === 'Стандарт' ? (
        <ChangeTime />
    ) : (
        <ChangeNumber />
    );
};

export default ChangeTimeNumber;
