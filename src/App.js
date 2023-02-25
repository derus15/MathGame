import './App.css';
import Example from "./component/Example";
import React, {useState} from "react";
import Result from "./component/Result";
import Interface from "./UI/Interface/Interface";

function App() {

// Для удобства сделать min, max число у number
// Прикрутить стили
// Алгоритм для неповторяющихся чисел генерировать через set два списка или заносить уже сгенерированные и проверять их
// наличие при генерации
// Очистка поля при завершении сессии
// Таймер сверху экрана
// Увеличении числа при прокрутке колесиком, поскольку это input type number

    const [modal, setModal] = useState(false);
    const [counter, setCounter] = useState(0);

    const [number, setNumbers] = useState({
        num_1: Math.floor(Math.random() * 100),
        num_2: Math.floor(Math.random() * 100),
    })

    function refresh(){
        const refreshNum = {
            num_1: Math.floor(Math.random() * 100),
            num_2: Math.floor(Math.random() * 100),
        }
        setNumbers(refreshNum);
    }


    function resetCounter(){
        setCounter(0);
    }

    function counterExample(){
        setCounter(counter+1);
    }

    function endSession(){
        console.log('конец');
        setModal(true);
    }

    function closeModal(){
        setModal(false);
    }

  return (
      <div className={'container'}>
          <h1 className={'header'}>MGame</h1>
          <Interface/>
          <div className={'App'}>
              {modal
                  ?
                    <Result counter={counter} closeModal={closeModal}/>
                  :<>
                    <Example number={number} endSession={endSession} refresh={refresh}
                     resetCounter={resetCounter} counter={counterExample}/>
                    <div className={'answer'}>Ответ: {number.num_1 + number.num_2}</div>
                  </>
              }
          </div>
      </div>
  );
}

export default App;
