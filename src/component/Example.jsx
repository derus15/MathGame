import React from 'react';
import { useSelector } from 'react-redux';
import normalizationExample from '../helpers/normalizationExample/normalizationExample';

const Example = ({ setAnswer }) => {

    const numsList = useSelector((state) => state.example.numbers);
    const sign = useSelector((state) => state.example.sign);

    const example = normalizationExample({ numsList, sign, setAnswer });

    return (
        <div>
            {example}
        </div>
    );
};

export default Example;
