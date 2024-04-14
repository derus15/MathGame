import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StateSchema } from 'app/Providers/Store/types';
import { sessionActions } from 'entities/Session';

export const FactoryCounter = () => {

    const counter = useSelector((state: StateSchema) => state.factoryMode.exampleProduce);
    const dispatch = useDispatch();
    
    useEffect(() => {
        if (counter >= 250) {
            // dispatch(sessionActions.endSession());
        }
    }, [counter]);
    
    return (
        <div className="timer">
            {counter} | 250
        </div>
    );
};
