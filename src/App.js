import './App.css';
import Example from "./component/Example";
import React, {useState} from "react";
import MyModal from "./UI/Modal/MyModal";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";


function App() {

// Для удобства сделать min, max число у number
// Прикрутить стили
// Алгоритм для неповторяющихся чисел генерировать через set два списка или заносить уже сгенерированные и проверять их
// наличие при генерации
// Очистка поля при завершении сессии
// Таймер сверху экрана
// Увеличении числа при прокрутке колесиком, поскольку это input type number

    const [end, setEnd] = useState(false);
    const [modal, setModal] = useState(false);
    const [counter, setCounter] = useState(0);

    const [number, setNumbers] = useState({
        num_1: Math.floor(Math.random() * 100),
        num_2: Math.floor(Math.random() * 100),
    })

    function resetCounter(){
        setCounter(0);
    }

    function refresh(){
        const refreshNum = {
            num_1: Math.floor(Math.random() * 100),
            num_2: Math.floor(Math.random() * 100),
        }
        setNumbers(refreshNum);
    }

    function counterExample(){
        setCounter(counter+1);
    }

    function endSession(){
        console.log('конец');
        setEnd(true);
        setModal(true);
    }

  return (
      <div className={'container'}>
          <h1 className={'header'} >MathGame</h1>
          <div className={'App'}>
              {modal
                  ?
              <div className={'result'}>
                Примеров решено: {counter}
                  <MyButton onClick={() => setModal(false)}>Хорошо</MyButton>
              </div>
                  :<>
                      <Example setEnd={setEnd} number={number} endSession={endSession} refresh={refresh}
                       resetCounter={resetCounter} counter={counterExample}/>
                      <div className={'answer'}>Ответ: {number.num_1 + number.num_2}</div>
                  </>
              }

          </div>
      </div>
  );
}

export default App;
