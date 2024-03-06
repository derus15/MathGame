import React, { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import normalizationExample from 'shared/lib/normalizationExample/normalizationExample';
import { StateSchema } from 'app/Providers/Store/types';
import { exampleActions } from 'entities/Example/model/slice/exampleSlice';
import style from './Example.module.css';

export const Example = memo(() => {

    const numbersList = useSelector((state: StateSchema) => state.example.numbersList);
    const sign = useSelector((state: StateSchema) => state.example.sign);
    const dispatch = useDispatch();
    const setAnswer = (answer: string) => { dispatch(exampleActions.setAnswer(answer)); };
    
    const example = normalizationExample({ numbersList, sign, setAnswer });

    return (
        <div className={style.example}> 
            {example}
        </div>
    );
});