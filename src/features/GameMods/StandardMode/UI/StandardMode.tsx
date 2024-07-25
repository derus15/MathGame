import React from 'react';
import { Example, ExampleInput, getExampleAnswer } from 'entities/Example';
import { useSelector } from 'react-redux';
import { StandardTimer } from '../UI/Timer/StandardTimer';
import { useCheckAnswer } from '../../hooks/useCheckAnswer';
import { useStartSession } from '../../hooks/useStartSession';

export const StandardMode = () => {

    const answer = useSelector(getExampleAnswer);
    const { checkAnswer, isCorrect, isIncorrect } = useCheckAnswer();
    const { startSessionHandler } = useStartSession();

    return (
        <>
            <StandardTimer />
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
