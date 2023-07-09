import React from 'react';
import ChangeTime from './ChangeTime';
import ChangeNumber from './ChangeNumber';
import { useSelector } from 'react-redux';

const ChangeTimeNumber = ({ sessionProgress }) => {

    const gameMode = useSelector(state => state.interface.mode);

    return (
        <>
            {(gameMode === 'Стандарт')
                ?
                <ChangeTime sessionProgress={sessionProgress} />
                :
                <ChangeNumber sessionProgress={sessionProgress} />
            }
        </>
    );
};

export default ChangeTimeNumber;