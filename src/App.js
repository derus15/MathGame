import './App.css';
import Example from "./component/Example";
import React, {useEffect, useState} from "react";
import Result from "./component/Result";
import Interface from "./UI/Interface/Interface";
import Footer from "./component/Footer";

function App() {

    const [result, setResult] = useState(false);
    const [counter, setCounter] = useState(0);
    const [duration, setDuration] = useState(15);
    const [time, setTime] = useState(15);

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
              <h1 className={'header'} >MathGame</h1>
              <div className={'App'}>
                  {result
                      ?
                        <Result counter={counter} closeResult={endSession}/>
                      :<div>
                        <Interface changeTimeInterface={changeTimeInterface}/>
                        <Example endSession={endSession} resetCounter={resetCounter} incrementCounter={incrementCounter}
                                 duration={duration} time={time} setTime={setTime}/>
                      </div>
                  }
              </div>
              <Footer/>
          </div>
  );
}

export default App;
