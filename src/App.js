import './App.css';
import './UI/Themes/Themes.css'
import ExampleArea from "./component/ExampleArea";
import React, {useEffect, useState} from "react";
import Result from "./component/Result";
import Interface from "./component/Interface/Interface";
import Footer from "./component/Footer/Footer";

function App() {

    const [result, setResult] = useState(false);
    const [counter, setCounter] = useState(0);
    const [durationTime, setDurationTime] = useState(localStorage.getItem('durationTime') || 15);
    const [durationNumber, setDurationNumber] = useState(localStorage.getItem('durationNumber') || 10);
    const [sessionProgress, setSessionProgress] = useState(false);
    const [theme, setTheme] = useState( localStorage.getItem('theme') || 'Темная');
    const [gameMode, setGameMode] = useState(localStorage.getItem('mode') || 'Стандарт');

    const [signList, setSignList] = useState(() => {
        const storedSignList = localStorage.getItem('signList');
        return storedSignList ? JSON.parse(storedSignList) : ['+', '-'];
    });

    useEffect(() =>
        localStorage.setItem('durationTime', durationTime),
        localStorage.setItem('theme', theme),
        localStorage.setItem('durationNumber', durationNumber), []);

    function addSignInSession(id) {
        if (!sessionProgress) {
            if (signList.includes(id) && signList.length > 1) {
                const updatedSignList = signList.filter(sign => sign !== id)
                setSignList(updatedSignList);
                localStorage.setItem('signList', JSON.stringify(updatedSignList));
            } else if (!signList.includes(id)) {
                const updatedSignList = [...signList, id];
                setSignList(updatedSignList);
                localStorage.setItem('signList', JSON.stringify(updatedSignList));
            }
        }
    }

    function changeGameModeInSession(id){
        if (!sessionProgress) {
            setGameMode(id);
            localStorage.setItem('mode', id);
        }
    }

    function changeTimeInSession(id) {
        if (!sessionProgress) {
            setDurationTime(id);
            localStorage.setItem('durationTime', id);
        }
    }

    function changeNumberInSession(id){
        if (!sessionProgress) {
            setDurationNumber(id);
            localStorage.setItem('durationNumber', id);
        }
    }

    function changeTheme(themesList) {
      const currentIndex = themesList.findIndex(new_theme => new_theme === theme);
      const nextIndex = (currentIndex + 1) % themesList.length;
      setTheme(themesList[nextIndex]);
      localStorage.setItem('theme', themesList[nextIndex]);
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
          <div className={'container'} datatheme={theme}>
              <h1 className={'header'}>MathGame</h1>
              <div className={'App'}>
                  {result
                      ?
                        <Result counter={counter} closeResult={endSession} gameMode={gameMode}/>
                      :<div>
                        <Interface changeTimeInSession={changeTimeInSession}
                                   changeNumberInSession={changeNumberInSession}
                                   addSignInSession={addSignInSession}
                                   durationNumber={durationNumber} signList={signList}
                                   durationTime={durationTime} gameMode={gameMode}
                                   changeGameMode={changeGameModeInSession}/>

                        <ExampleArea endSession={endSession}
                                     resetCounter={resetCounter}
                                     incrementCounter={incrementCounter}
                                     durationTime={durationTime} setSessionProgress={setSessionProgress}
                                     sessionProgress={sessionProgress} signList={signList}
                                     counter={counter} gameMode={gameMode} durationNumber={durationNumber}/>
                      </div>
                  }
              </div>
              <Footer changeTheme={changeTheme} theme={theme} />
          </div>
  );
}

export default App;
