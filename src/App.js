import './App.css';
import Example from "./component/Example";
import React, {useState} from "react";
import Result from "./component/Result";
import Interface from "./UI/Interface/Interface";

function App() {

// Алгоритм для неповторяющихся чисел генерировать через set два списка или заносить уже сгенерированные и проверять их
// наличие при генерации
// Увеличении числа при прокрутке колесиком, поскольку это input type number

    const [end, setEnd] = useState(false);
    const [modal, setModal] = useState(false);
    const [counter, setCounter] = useState(0);


    function resetCounter(){
        setCounter(0);
    }

    function counterExample(){
        setCounter(counter+1);
    }

    function endSession(){
        console.log('конец');
        setEnd(true);
        setModal(true);
    }

    function closeModal(){
        setModal(false);
    }

  return (
      <div className={'container'}>
          <Interface/>
          <h1 className={'header'} >MathGame</h1>
          <div className={'App'}>
              {modal
                  ?
                    <Result counter={counter} closeModal={closeModal}/>
                  :<div>
                    <Example endSession={endSession} resetCounter={resetCounter} counter={counterExample}/>
                  </div>
              }
          </div>
      </div>
  );
}

export default App;
