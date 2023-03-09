import './App.css';
import Example from "./component/Example";
import React, {useEffect, useState} from "react";
import Result from "./component/Result";
import Interface from "./UI/Interface/Interface";
import Footer from "./component/Footer";

function App() {

    const [modal, setModal] = useState(false);
    const [counter, setCounter] = useState(0);
    const [duration, setDuration] = useState(15);
    const [time, setTime] = useState(15);

    function changeTime_15(){
        setTime(15);
        setDuration(15);
    }

    function changeTime_30(){
        setTime(30);
        setDuration(30);
    }

    function changeTime_00(){
        setTime(60);
        setDuration(60);
    }

    function resetCounter(){
        setCounter(0);
    }

    function counterExample(){
        setCounter(counter+1);
    }

    function endSession(){
        setModal(true);
    }

    function closeModal(){
        setModal(false);
    }

  return (
          <div className={'container'}>
              <h1 className={'header'} >MathGame</h1>
              <div className={'App'}>
                  {modal
                      ?
                        <Result counter={counter} closeModal={closeModal}/>
                      :<div>
                        <Interface changeTime_15={changeTime_15} changeTime_30={changeTime_30} changeTime_00={changeTime_00}/>
                        <Example endSession={endSession} resetCounter={resetCounter} counter={counterExample}
                                 duration={duration} time={time} setTime={setTime}/>
                      </div>
                  }
              </div>
              <Footer/>
          </div>
  );
}

export default App;
