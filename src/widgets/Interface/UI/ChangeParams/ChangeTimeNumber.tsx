import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import ChangeTime from './ChangeTime';
import ChangeNumber from './ChangeNumber';
import { getInterfaceGameMode } from '../../model/selectors/getInterfaceGameMode';

const ChangeTimeNumber = () => {

    const gameMode = useSelector(getInterfaceGameMode);

    return gameMode === 'Стандарт' ? (
        <ChangeTime />
    ) : (
        <ChangeNumber />
    );
};

export default memo(ChangeTimeNumber);
