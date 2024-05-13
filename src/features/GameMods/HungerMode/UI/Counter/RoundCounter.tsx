import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentRound, hungerModeActions } from 'features/GameMods/HungerMode';
import { getInterfaceRounds } from 'widgets/Interface/model/selectors/getInterfaceRounds';
import { sessionActions } from 'entities/Session';
import { BaseCounter } from './BaseCounter';

export const RoundCounter = () => {

    const currentRounds = useSelector(getCurrentRound);
    const rounds = useSelector(getInterfaceRounds);
    const exampleStep = 2;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(hungerModeActions.setHungerPoint(exampleStep * currentRounds + exampleStep));
    }, [rounds]);

    const endRound = () => {
        dispatch(sessionActions.endSession());
    };

    return (
        <BaseCounter incrementArg={currentRounds} targetArg={rounds} mark="/" callback={endRound} />
    );
};
