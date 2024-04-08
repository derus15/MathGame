import React, { ChangeEvent } from 'react';
import { Example, getAnswer, getExample, useRefreshExample } from 'entities/Example';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import { useDispatch, useSelector } from 'react-redux';
import { useModifications } from 'features/Modifications';
import { sessionDataActions } from 'entities/SessionData';
import { SprintTimer } from '../UI/Timer/SprintTimer';

interface StandardModeProps {
    startSessionHandler: () => void,
}

export const SprintMode = ({ startSessionHandler }: StandardModeProps) => {

    const dispatch = useDispatch();
    const answer = useSelector(getAnswer);
    const example = useSelector(getExample);
    const { refreshExample } = useRefreshExample();
    const [oneTry] = useModifications();

    const checkAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        oneTry(e);
        if (e.target.value === answer) {
            dispatch(sessionDataActions.incrementSessionPoints());
            dispatch(sessionDataActions.updateExampleList([example, answer]));
            refreshExample();
            e.target.value = '';
        }
    };
    
    return (
        <>
            <SprintTimer />
            <Example />
            <ExampleInput
                focus={startSessionHandler}
                onInput={checkAnswer}
                signalAnswer={answer}
            />
            {__IS_DEV__ && <div style={{ fontSize: '2rem', color: 'white' }}>{answer}</div>}
        </>
    );
};
