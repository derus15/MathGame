import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Result from '../Result';
import Interface from '../Interface/Interface';
import ExampleArea from '../ExampleArea';

const Home = () => {

    const [result, setResult] = useState(false);
    const [sessionProgress, setSessionProgress] = useState(false);

    function endSession() {
        setSessionProgress(false);
        setResult(!result);
    }

    return (
        <div className={'container'}>
            <Header />
            <div className={'App'}>
                {result
                    ?
                    <Result closeResult={endSession} />
                    :
                    <div>
                        <Interface sessionProgress={sessionProgress} />

                        <ExampleArea endSession={endSession}
                                     setSessionProgress={setSessionProgress}
                                     sessionProgress={sessionProgress} />
                    </div>
                }
            </div>
            <Footer />
        </div>
    );
};

export default Home;