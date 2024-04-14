import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnswer, getExample, useRefreshExample } from 'entities/Example';
import style from './FactoryMode.module.css';
import ExampleInput from 'shared/UI/Input/ExampleInput/ExampleInput';
import { FactoryCounter } from '../UI/Counter/FactoryCounter';
import { factoryModeActions } from '../model/slice/factoryModeSlice';

export const FactoryMode = () => {

    const answer = useSelector(getAnswer);
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
