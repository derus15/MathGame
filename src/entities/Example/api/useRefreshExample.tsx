import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getInterfaceSignsList } from 'widgets/Interface';
import generateExample from 'shared/lib/generateExample/generateExample';
import { exampleActions } from '../model/slice/exampleSlice';
import { generateSeed } from 'shared/lib/generateExampleSeed/generateExampleSeed';

export const useRefreshExample = () => {

    const dispatch = useDispatch();
    const signList = useSelector(getInterfaceSignsList);

    const [initialSeed, setInitialSeed] = useState(generateSeed(signList));
    const [iteration, setIteration] = useState(0);

    const refreshExample = () => {

        const { example, answer, sign, seed, nextIteration } = generateExample({
            signList,
            seed: initialSeed,
            iteration,
        });

        setIteration(nextIteration);
        dispatch(exampleActions.setAnswer(answer));
        dispatch(exampleActions.setExample(example));
        dispatch(exampleActions.setSign(sign));
    };

    const retry = () => {};

    return { refreshExample, retry };
};
