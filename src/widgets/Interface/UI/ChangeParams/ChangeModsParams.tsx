import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import ChangeTime from './ChangeTime';
import ChangeNumber from './ChangeNumber';
import ChangeRounds from './ChangerRounds';
import { getParamsGameMode } from 'entities/SessionParams';

const gameModsList: Record<string, React.ReactElement> = {
    'Стандарт': <ChangeTime />,
    'Спринт': <ChangeNumber />,
    'Голод': <ChangeRounds />,
};

export const ChangeModsParams = memo(() => {

    const gameMode = useSelector(getParamsGameMode);

    return gameModsList[gameMode];

});
