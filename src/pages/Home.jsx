import React, { useState } from 'react';
import Result from './Result/Result';
import Interface from '../component/Interface/Interface';
import ExampleArea from '../component/ExampleArea';

const Home = () => {
    const [isResult, setIsResult] = useState(false);
    const [sessionProgress, setSessionProgress] = useState(false);

    const endSession = () => {
        setSessionProgress(false);
        setIsResult(!isResult);
    };

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {isResult ? (
                <Result setIsResult={setIsResult} />
            ) : (
                <>
                    <Interface sessionProgress={sessionProgress} />

                    <ExampleArea
                        endSession={endSession}
                        setSessionProgress={setSessionProgress}
                        sessionProgress={sessionProgress}
                    />
                </>
            )}
        </>
    );
};

export default Home;
