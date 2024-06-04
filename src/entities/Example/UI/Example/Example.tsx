import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Example.module.css';
import { getExample } from '../../model/selectors/getExample';
import { StateSchema } from 'app/Providers/Store/types';
import { exampleActions } from '../../model/slice/exampleSlice';

export const Example = memo(() => {

    const example = useSelector(getExample);
    const dispatch = useDispatch();
    const seed = useSelector((state: StateSchema) => state.example.seed);

    useEffect(() => {
        if (seed === null) {
            dispatch(exampleActions.generateSeed());
        }
    }, [seed]);

    return (
        <div className={style.example}>
            {example}
        </div>
    );
});
