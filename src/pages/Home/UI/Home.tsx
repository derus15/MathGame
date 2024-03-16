import React, { ChangeEvent, memo, useEffect } from 'react';
import { Interface } from 'widgets/Interface';
import { useDispatch, useSelector } from 'react-redux';
import { getResult, getSessionProgress, sessionActions } from 'entities/Session';
import { TimersProvider } from 'widgets/Timers';
import { Example, getAnswer, getExample, useRefreshExample } from 'entities/Example';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import { InstructionsProvider } from 'widgets/Instructions';
import { useModifications } from 'features/Modifications';
import { sessionDataActions } from 'entities/SessionData';
import { Result } from 'pages/Result';

const Home = () => {

    const isResult = useSelector(getResult);
    const dispatch = useDispatch();
    const answer = useSelector(getAnswer);
    const example = useSelector(getExample);
    const sessionProgress = useSelector(getSessionProgress);
    const { refreshExample } = useRefreshExample();
    const [oneTry] = useModifications();

    useEffect(() => () => { dispatch(sessionActions.resetSessionProgress()); }, []);

    const startSessionHandler = () => {
        if (!sessionProgress) {
            dispatch(sessionDataActions.resetExampleList());
        }
        dispatch(sessionActions.startSession());
    };

    const checkAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        oneTry(e);
        if (e.target.value === answer) {
            dispatch(sessionDataActions.incrementSessionPoints());
            dispatch(sessionDataActions.updateExampleList([example, answer]));
            refreshExample();
            e.target.value = '';
        }
    };
    
    if (isResult) {
        return <Result />;
    }
    
    return (
        <>
            <Interface />
            <TimersProvider />
            <div className="exampleContainer">
                <Example />
                <ExampleInput
                    focus={startSessionHandler}
                    onInput={checkAnswer}
                    signalAnswer={answer}
                />
                {__IS_DEV__ && <div style={{ fontSize: '2rem', color: 'white' }}>{answer}</div>}
            </div>
            <InstructionsProvider />
        </>
    );
};

export default memo(Home);
