import './App.css';
import './UI/Themes/Themes.css'
import ExampleArea from "./component/ExampleArea";
import React, {useEffect, useState} from "react";
import Result from "./component/Result";
import Interface from "./component/Interface/Interface";
import Footer from "./component/Footer/Footer";
import {useSelector} from "react-redux";

function App() {

    const [result, setResult] = useState(false);
    const [counter, setCounter] = useState(0);
    const [sessionProgress, setSessionProgress] = useState(false);
    const [theme, setTheme] = useState( localStorage.getItem('theme') || 'Темная');
    const [gameMode, setGameMode] = useState(localStorage.getItem('mode') || 'Стандарт');

    const [signList, setSignList] = useState(() => {
        const storedSignList = localStorage.getItem('signList');
        return storedSignList ? JSON.parse(storedSignList) : ['+', '-'];
    });

    const time = useSelector(state => state.interface.time);
    const number = useSelector(state => state.interface.number);

    useEffect(() =>
        localStorage.setItem('durationTime', time),
        localStorage.setItem('theme', theme),
        localStorage.setItem('durationNumber', number ), []);

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
            resetCounter();
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
                        <Interface sessionProgress={sessionProgress}
                                   addSignInSession={addSignInSession}
                                   signList={signList} gameMode={gameMode}
                                   changeGameMode={changeGameModeInSession}/>

                        <ExampleArea endSession={endSession}
                                     resetCounter={resetCounter}
                                     incrementCounter={incrementCounter}
                                     setSessionProgress={setSessionProgress}
                                     sessionProgress={sessionProgress} signList={signList}
                                     counter={counter} gameMode={gameMode}/>
                      </div>
                  }
              </div>
              <Footer changeTheme={changeTheme} theme={theme} />
          </div>
    );
}

export default App;
