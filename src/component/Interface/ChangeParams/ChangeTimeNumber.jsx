import React from 'react';
import { useSelector } from 'react-redux';
import ChangeTime from './ChangeTime';
import ChangeNumber from './ChangeNumber';

const ChangeTimeNumber = ({ sessionProgress }) => {
    const gameMode = useSelector((state) => state.interface.mode);

    return gameMode === 'Стандарт' ? (
        <ChangeTime sessionProgress={sessionProgress} />
    ) : (
        <ChangeNumber sessionProgress={sessionProgress} />
    );
};

export default ChangeTimeNumber;
