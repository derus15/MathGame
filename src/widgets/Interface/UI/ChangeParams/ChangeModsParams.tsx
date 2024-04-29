import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import ChangeTime from './ChangeTime';
import ChangeNumber from './ChangeNumber';
import { getInterfaceGameMode } from '../../model/selectors/getInterfaceGameMode';
import ChangeRounds from 'widgets/Interface/UI/ChangeParams/ChangerRounds';

const gameModsList: Record<string, React.ReactElement> = {
    'Стандарт': <ChangeTime />,
    'Спринт': <ChangeNumber />,
    'Голод': <ChangeRounds />,
};

export const ChangeModsParams = memo(() => {

    const gameMode = useSelector(getInterfaceGameMode);

    return gameModsList[gameMode];

});
