import React from 'react';
import { Example, ExampleInput, getExampleAnswer } from 'entities/Example';
import { useSelector } from 'react-redux';
import { SprintTimer } from '../UI/Timer/SprintTimer';
import { useCheckAnswer } from '../../hooks/useCheckAnswer';
import { useStartSession } from '../../hooks/useStartSession';

export const SprintMode = () => {

    const answer = useSelector(getExampleAnswer);
    const { checkAnswer, isCorrect, isIncorrect } = useCheckAnswer();
    const { startSessionHandler } = useStartSession();
    
    return (
        <>
            <SprintTimer />
            <Example />
            <ExampleInput
                answerSignal={isCorrect}
                errorSignal={isIncorrect}
                onFocus={startSessionHandler}
                onInput={checkAnswer}
            />
            {__IS_DEV__ && <div style={{ fontSize: '2rem', color: 'white' }}>{answer}</div>}
        </>
    );
};
