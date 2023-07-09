import './App.css';
import './UI/Themes/Themes.css';
import ExampleArea from './component/ExampleArea';
import React, { useState } from 'react';
import Result from './component/Result';
import Interface from './component/Interface/Interface';
import Footer from './component/Footer/Footer';

function App() {

    const [result, setResult] = useState(false);
    const [sessionProgress, setSessionProgress] = useState(false);

    function endSession() {
        setSessionProgress(false);
        setResult(!result);
    }

    return (
        <div className={'container'}>
            <h1 className={'header'}>MathGame</h1>
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
}

export default App;
