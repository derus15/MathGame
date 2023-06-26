import './App.css';
import './UI/Themes/Themes.css'
import ExampleArea from "./component/ExampleArea";
import React, {useState} from "react";
import Result from "./component/Result";
import Interface from "./component/Interface/Interface";
import Footer from "./component/Footer/Footer";

function App() {

    const [result, setResult] = useState(false);
    const [counter, setCounter] = useState(0);
    const [sessionProgress, setSessionProgress] = useState(false);
    const [gameMode, setGameMode] = useState(localStorage.getItem('mode') || 'Стандарт');

    function changeGameModeInSession(mode) {
        if (!sessionProgress) {
            setGameMode(mode);
            localStorage.setItem('mode', mode);
            resetCounter();
        }
    }

    function resetCounter() {
        setCounter(0);
    }

    function incrementCounter() {
        setCounter(counter + 1);
    }

    function endSession() {
        setSessionProgress(false);
        setResult(!result);
        if (gameMode === 'Спринт') {
            resetCounter();
        }
    }

    return (
          <div className={'container'} >
              <h1 className={'header'}>MathGame</h1>
              <div className={'App'}>
                  {result
                      ?
                        <Result counter={counter} closeResult={endSession} gameMode={gameMode}/>
                      :<div>
                        <Interface sessionProgress={sessionProgress}
                                   gameMode={gameMode}
                                   changeGameMode={changeGameModeInSession}/>

                        <ExampleArea endSession={endSession}
                                     resetCounter={resetCounter}
                                     incrementCounter={incrementCounter}
                                     setSessionProgress={setSessionProgress}
                                     sessionProgress={sessionProgress}
                                     counter={counter} gameMode={gameMode}/>
                      </div>
                  }
              </div>
              <Footer />
          </div>
    );
}

export default App;
