import React from 'react';
import { useSelector } from 'react-redux';
import ChangeTime from './ChangeTime';
import ChangeNumber from './ChangeNumber';
import { StateSchema } from '../../../redux/types';

const ChangeTimeNumber = () => {
    const gameMode = useSelector((state: StateSchema) => state.interface.mode);

    return gameMode === 'Стандарт' ? (
        <ChangeTime />
    ) : (
        <ChangeNumber />
    );
};

export default ChangeTimeNumber;
