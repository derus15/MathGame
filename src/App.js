import './App.css';
import Example from "./component/Example";
import React, {useState} from "react";
import Timer from "./component/Timer";


function App() {

// Для удобства сделать min, max число у number
// Прикрутить стили
// Алгоритм для неповторяющихся чисел генерировать через set два списка или заносить уже сгенерированные и проверять их
// наличие при генерации
// Очистка поля при завершении сессии
// Таймер сверху экрана

    const [inputExample, setInputExample] = useState(true);
    const [buttonStart, setButtonStart] = useState(false)

    const [number, setNumbers] = useState({
        num_1: Math.floor(Math.random() * 100),
        num_2: Math.floor(Math.random() * 100)
    })

    function refresh(){
        const refreshNum = {
            num_1: Math.floor(Math.random() * 100),
            num_2: Math.floor(Math.random() * 100)
        }
        setNumbers(refreshNum);
    }

    function startSession(){
        refresh()
        console.log('начало');
        setInputExample(false);
        setTimeout(endSession, 10000);
    }

    function endSession(){
        console.log('конец');
        setInputExample(true);
    }


  return (
    <div className={'App'}>
      <Timer timer={startSession} disabled = {buttonStart}/>
      <Example disabled={inputExample} number={number} refresh={refresh}/>
      <div className={'answer'}>Ответ: {number.num_1 + number.num_2}</div>
    </div>
  );
}

export default App;
