import './App.css';
import Example from "./component/Example";
import React, {useState} from "react";
import Result from "./component/Result";
import Interface from "./UI/Interface/Interface";
import Footer from "./component/Footer";

function App() {

    const [modal, setModal] = useState(false);
    const [counter, setCounter] = useState(0);


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
                        <Interface/>
                        <Example endSession={endSession} resetCounter={resetCounter} counter={counterExample}/>
                      </div>
                  }
              </div>
              <Footer/>
          </div>
  );
}

export default App;
