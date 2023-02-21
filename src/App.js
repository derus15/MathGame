import './App.css';
import Example from "./component/Example";
import React, {useState} from "react";
import MyModal from "./UI/Modal/MyModal";


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

    function endSession(){
        console.log('конец');
        setEnd(true);
        setModal(true);
    }

  return (
          <div className={'App'}>
              <MyModal visible={modal} setVisible={setModal}>
                Вы решили 10 примеров
                  <button onClick={() => setModal(false)}>хорошо</button>
              </MyModal>
              <Example setEnd={setEnd} number={number} endSession={endSession} refresh={refresh}/>
              <div className={'answer'}>Ответ: {number.num_1 + number.num_2}</div>
          </div>
  );
}

export default App;
