import './App.css';
import Example from "./component/Example";
import React, {useState} from "react";
import MyInput from "./UI/Input/MyInput";


function App() {




    const [number, setNumbers] = useState({
        num_1: Math.floor(Math.random() * 100),
        num_2: Math.floor(Math.random() * 100)
    })

    function refresh(number){
        const refreshNum = {
            num_1: Math.floor(Math.random() * 100),
            num_2: Math.floor(Math.random() * 100)
        }
        setNumbers(refreshNum);
    }

  return (
    <div style={{textAlign:'center'}}>
      <Example number={number} refresh={refresh}/>
      <button
        style={{fontSize: '20px', margin:'15px', padding:'5px'}}
        onClick={refresh}
      >Refresh</button>
      <div style={{fontSize: '20px'}} >Ответ: {number.num_1 + number.num_2}</div>
    </div>
  );
}

export default App;
