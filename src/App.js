import './App.css';
import Example from "./component/Example";
import React, {useState} from "react";
import MyInput from "./UI/Input/MyInput";


function App() {

// Для удобства сделать min, max число у number
// Прикрутить стили
// Алгоритм для неповторяющихся чисел генерировать через set два списка или заносить уже сгенерированные и проверять их
// наличие при генерации


    const [number, setNumbers] = useState({
        num_1: Math.floor(Math.random() * 100),
        num_2: Math.floor(Math.random() * 100)
    })

    function refresh(max = 100, min = 1){
        const refreshNum = {
            num_1: Math.floor(Math.random() * 100),
            num_2: Math.floor(Math.random() * 100)
        }
        setNumbers(refreshNum);
    }



    function timer(){

    }


  return (
    <div className={'App'}>
      <div style={{position: 'absolute', left:'47%', top:'200px'}}>
            <button
                style={{color:"white", fontSize:'25px', borderColor: 'white', padding:'5px 10px' }}
                onClick={() => {console.log('asd')}}>Start
            </button>
      </div>
      <Example number={number} refresh={refresh}/>
      <div className={'answer'} >Ответ: {number.num_1 + number.num_2}</div>
    </div>
  );
}

export default App;
