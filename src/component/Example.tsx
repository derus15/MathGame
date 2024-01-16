import React, { Dispatch } from 'react';
import { useSelector } from 'react-redux';
import normalizationExample from 'helpers/normalizationExample/normalizationExample';
import { StateSchema } from 'redux/types';

interface ExampleProps {
    setAnswer: Dispatch<React.SetStateAction<string>>,
}

const Example = ({ setAnswer }: ExampleProps) => {

    const numbersList = useSelector((state: StateSchema) => state.example.numbersList);
    const sign = useSelector((state: StateSchema) => state.example.sign);

    const example = normalizationExample({ numbersList, sign, setAnswer });

    return (
        <div>
            {example}
        </div>
    );
};

export default Example;
