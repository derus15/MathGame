import React from 'react';
import MyButton from "../UI/Button/MyButton";

const Result = ({counter, closeResult}) => {
    return (
      <div className={'result'}>
           Примеров решено: {counter}
          <MyButton onClick={closeResult}></MyButton>
      </div>
    );
};

export default Result;