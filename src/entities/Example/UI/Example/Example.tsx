import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import style from './Example.module.css';
import { getExample } from 'entities/Example';

export const Example = memo(() => {

    const example = useSelector(getExample);

    return (
        <div className={style.example}>
            {example}
        </div>
    );
});
