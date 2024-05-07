import React from 'react';
import { Example, getExampleAnswer } from 'entities/Example';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import { useSelector } from 'react-redux';
import { StandardTimer } from '../UI/Timer/StandardTimer';
import { useCheckAnswer } from 'features/GameMods/hooks/useCheckAnswer';

interface StandardModeProps {
    startSessionHandler: () => void,
}

export const StandardMode = ({ startSessionHandler }: StandardModeProps) => {

    const answer = useSelector(getExampleAnswer);
    const { checkAnswer } = useCheckAnswer();

    return (
        <>
            <StandardTimer />
            <Example />
            <ExampleInput
                onlyNumber
                focus={startSessionHandler}
                onInput={checkAnswer}
                signal={answer}
            />
            {__IS_DEV__ && <div style={{ fontSize: '2rem', color: 'white' }}>{answer}</div>}
        </>
    );
};
