import './App.css';
import ExampleArea from "./component/ExampleArea";
import React, {useState} from "react";
import Result from "./component/Result";
import Interface from "./component/Interface/Interface";
import Footer from "./component/Footer/Footer";

function App() {

    const [result, setResult] = useState(false);
    const [counter, setCounter] = useState(0);
    const [duration, setDuration] = useState(15);
    const [time, setTime] = useState(15);
    const [sessionProgress, setSessionProgress] = useState(false);
    const [signList, setSignList] = useState(['+','-']);

    function addSignInSession(id) {
        if (!sessionProgress) {
            if (signList.includes(id) && signList.length > 1) {
                setSignList(signList.filter(sign => sign !== id));
            } else if (!signList.includes(id)) {
                setSignList([...signList, id]);
            }
        }
    }

    function changeTimeInterface(id){
        if (!sessionProgress) {
            setTime(id);
            setDuration(id);
        }
    }

    function resetCounter(){
        setCounter(0);
    }

    function incrementCounter(){
        setCounter(counter+1);
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
                        <Interface changeTimeInterface={changeTimeInterface}
                                   addSignInSession={addSignInSession}
                                   signList={signList} time={duration}/>

                        <ExampleArea endSession={endSession}
                                     resetCounter={resetCounter}
                                     incrementCounter={incrementCounter}
                                     duration={duration}
                                     time={time} setTime={setTime}
                                     setSessionProgress={setSessionProgress}
                                     sessionProgress={sessionProgress} signList={signList}/>
                      </div>
                  }
              </div>
              <Footer/>
          </div>
  );
}

export default App;
