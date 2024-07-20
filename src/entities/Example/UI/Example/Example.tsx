import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import style from './Example.module.css';
import { getExample } from '../../model/selectors/getExample';

export const Example = memo(() => {

    const example = useSelector(getExample);

    return (
        <div className={style.example} data-testid="example">
            {example}
        </div>
    );
});
