import React, { ChangeEvent, useEffect } from 'react';
import { Interface } from 'widgets/Interface';
import { useDispatch, useSelector } from 'react-redux';
import { getResult, sessionActions } from 'entities/Session';
import { TimersProvider } from 'widgets/Timers';
import { Example, getAnswer, useRefreshExample } from 'entities/Example';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import { InstructionsProvider } from 'widgets/Instructions';
import { useModifications } from 'features/Modifications';
import { sessionDataActions } from 'entities/SessionData';
import { Result } from 'pages/Result';

const Home = () => {

    const isResult = useSelector(getResult);
    const dispatch = useDispatch();
    const answer = useSelector(getAnswer);
    const { refreshExample } = useRefreshExample();
    const [oneTry] = useModifications();
    
    useEffect(() => () => { dispatch(sessionActions.resetSessionProgress()); }, []);

    const startSessionHandler = () => {
        dispatch(sessionActions.startSession());
    };

    const checkAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        oneTry(e);
        if (e.target.value === answer) {
            dispatch(sessionDataActions.incrementSessionPoints());
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

export default Home;
