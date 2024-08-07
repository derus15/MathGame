import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExampleAnswer, getExample, useRefreshExample } from 'entities/Example';
import style from './FactoryMode.module.css';
import { ExampleInput } from 'entities/Example/UI/ExampleInput/ExampleInput';
import { FactoryCounter } from '../UI/Counter/FactoryCounter';
import { factoryModeActions } from '../model/slice/factoryModeSlice';

export const FactoryMode = () => {

    const answer = useSelector(getExampleAnswer);
    const example = useSelector(getExample)?.slice(0, -2);
    const dispatch = useDispatch();
    const { refreshExample } = useRefreshExample();

    const checkAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value === '=') {
            dispatch(factoryModeActions.incrementExample());
            refreshExample();
            e.target.value = '';
        }
    };
    
    return (
        <>
            <FactoryCounter />
            <div className={style.example}>
                {example}
                <ExampleInput
                    onInput={checkAnswer}
                />
                {answer}
            </div>
        </>
    );
};
