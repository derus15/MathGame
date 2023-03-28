import './App.css';
import ExampleArea from "./component/ExampleArea";
import React, {useState} from "react";
import Result from "./component/Result";
import Interface from "./component/Interface/Interface";
import Footer from "./component/Footer/Footer";

function App() {

    const [result, setResult] = useState(false);
    const [counter, setCounter] = useState(0);
    const [time, setTime] = useState(localStorage.getItem('time') || localStorage.setItem('time', 15));
    const [selectedTime, setSelectedTime] = useState(time);
    const [sessionProgress, setSessionProgress] = useState(false);

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
            setSelectedTime(id);
            localStorage.setItem('time', id);
        }
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
          <div className={'container'}>
              <h1 className={'header'}>MathGame</h1>
              <div className={'App'}>
                  {result
                      ?
                        <Result counter={counter} closeResult={endSession}/>
                      :<div>
                        <Interface changeTimeInSession={changeTimeInSession}
                                   addSignInSession={addSignInSession}
                                   signList={signList} time={selectedTime}/>

                        <ExampleArea endSession={endSession}
                                     resetCounter={resetCounter}
                                     incrementCounter={incrementCounter}
                                     time={time} setTime={setTime}
                                     setSessionProgress={setSessionProgress}
                                     sessionProgress={sessionProgress} signList={signList}/>
                      </div>
                  }
              </div>
              <Footer />
          </div>
  );
}

export default App;
