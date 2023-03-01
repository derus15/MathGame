import React from 'react';
import MyButton from "../UI/Button/MyButton";

const Result = ({counter, closeModal}) => {
    return (
      <div className={'result'}>
           Примеров решено: {counter}
          <MyButton onClick={closeModal}>Хорошо</MyButton>
      </div>
    );
};

export default Result;