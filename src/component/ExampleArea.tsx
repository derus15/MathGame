import React, { ChangeEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Example, useRefreshExample, getAnswer } from 'entities/Example';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import { useModifications } from 'features/Modifications';
import { sessionActions } from 'entities/Session';
import { InstructionsProvider } from 'widgets/Instructions';
import { TimersProvider } from 'widgets/Timers';
import { sessionDataActions } from 'entities/SessionData';

const ExampleArea = () => {

    const dispatch = useDispatch();
    const answer = useSelector(getAnswer);
    const { refreshExample } = useRefreshExample();
    const [oneTry] = useModifications();

    useEffect(() => {
        dispatch(sessionDataActions.resetSessionPoints());
    }, []);

    const startSessionHandler = () => {
        dispatch(sessionActions.startSession());
    };
    
    const answered = (e: ChangeEvent<HTMLInputElement>) => {
        oneTry(e);
        if (e.target.value === answer) {
            dispatch(sessionDataActions.incrementSessionPoints());
            refreshExample();
            e.target.value = '';
        }
    };

    return (
        <>
            <TimersProvider />
            <div className="exampleContainer">
                <Example />
                <ExampleInput
                    focus={startSessionHandler}
                    onInput={answered}
                    signal={answer}
                />
                {__IS_DEV__ && <div style={{ fontSize: '2rem', color: 'white' }}>{answer}</div>}
            </div>
            <InstructionsProvider />
        </>
    );
};

export default ExampleArea;
