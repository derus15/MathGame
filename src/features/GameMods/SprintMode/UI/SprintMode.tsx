import React from 'react';
import { Example, getExampleAnswer } from 'entities/Example';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import { useSelector } from 'react-redux';
import { SprintTimer } from '../UI/Timer/SprintTimer';
import { useCheckAnswer } from 'features/GameMods/hooks/useCheckAnswer';

interface StandardModeProps {
    startSessionHandler: () => void,
}

export const SprintMode = ({ startSessionHandler }: StandardModeProps) => {

    const answer = useSelector(getExampleAnswer);
    const { checkAnswer } = useCheckAnswer();
    
    return (
        <>
            <SprintTimer />
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
