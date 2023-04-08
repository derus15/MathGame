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
    const [time, setTime] = useState(localStorage.getItem('time') || localStorage.setItem('time', 15));
    const [sessionProgress, setSessionProgress] = useState(false);
    const [theme, setTheme] = useState( localStorage.getItem('theme') || localStorage.setItem('theme', 'Темная'));

    const [signList, setSignList] = useState(() => {
        const storedSignList = localStorage.getItem('signList');
        return storedSignList ? JSON.parse(storedSignList) : ['+', '-'];
    });

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

    function changeTimeInSession(id) {
        if (!sessionProgress) {
            setTime(id);
            localStorage.setItem('time', id);
        }
    }

    function changeTheme(themesList){
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

    function endSession(){
        setSessionProgress(false);
        setResult(!result);
    }

  return (
          <div className={'container'} datatheme={theme}>
              <h1 className={'header'}>MathGame</h1>
              <div className={'App'}>
                  {result
                      ?
                        <Result counter={counter} closeResult={endSession}/>
                      :<div>
                        <Interface changeTimeInSession={changeTimeInSession}
                                   addSignInSession={addSignInSession}
                                   signList={signList}/>

                        <ExampleArea endSession={endSession}
                                     resetCounter={resetCounter}
                                     incrementCounter={incrementCounter}
                                     time={time} setTime={setTime}
                                     setSessionProgress={setSessionProgress}
                                     sessionProgress={sessionProgress} signList={signList}/>
                      </div>
                  }
              </div>
              <Footer changeTheme={changeTheme} theme={theme} />
          </div>
  );
}

export default App;
