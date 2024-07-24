import React from 'react';
import { Example, ExampleInput, getExampleAnswer } from 'entities/Example';
import { useSelector } from 'react-redux';
import { SprintTimer } from '../UI/Timer/SprintTimer';
import { useCheckAnswer } from 'features/GameMods/hooks/useCheckAnswer';
import { useStartSession } from 'features/GameMods/hooks/useStartSession';

export const SprintMode = () => {

    const answer = useSelector(getExampleAnswer);
    const { checkAnswer } = useCheckAnswer();
    const { startSessionHandler } = useStartSession();
    
    return (
        <>
            <SprintTimer />
            <Example />
            <ExampleInput
                onFocus={startSessionHandler}
                onInput={checkAnswer}
            />
            {__IS_DEV__ && <div style={{ fontSize: '2rem', color: 'white' }}>{answer}</div>}
        </>
    );
};
