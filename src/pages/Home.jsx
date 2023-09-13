import React, { useState } from 'react';
import Result from '../pages/Result/Result';
import Interface from '../component/Interface/Interface';
import ExampleArea from '../component/ExampleArea';

const Home = () => {

    const [isResult, setIsResult] = useState(false);
    const [sessionProgress, setSessionProgress] = useState(false);

    async function endSession() {
        setSessionProgress(false);
        setIsResult(!isResult);
    }

    return (
        <div>
            {isResult
                ?
                <Result setIsResult={setIsResult} />
                :
                <div className={'App'}>
                    <Interface sessionProgress={sessionProgress} />

                    <ExampleArea endSession={endSession}
                                 setSessionProgress={setSessionProgress}
                                 sessionProgress={sessionProgress} />
                </div>
            }
        </div>
    );
};

export default Home;