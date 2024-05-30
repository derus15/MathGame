import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getInterfaceSignsList } from 'widgets/Interface';
import { generateSeed } from 'shared/lib/generateExampleSeed/generateExampleSeed';
import generateExample from 'shared/lib/generateExample/generateExample';
import { exampleActions } from '../model/slice/exampleSlice';

export const useRefreshExample = () => {

    const dispatch = useDispatch();
    const signList = useSelector(getInterfaceSignsList);

    const [currentSeed, setCurrentSeed] = useState(generateSeed(signList));
    const [iteration, setIteration] = useState(0);

    const refreshExample = () => {

        const { example, answer, sign, seed, nextIteration } = generateExample({
            signList,
            seed: currentSeed,
            iteration,
        });

        setCurrentSeed(seed);
        setIteration(nextIteration);
        dispatch(exampleActions.setAnswer(answer));
        dispatch(exampleActions.setExample(example));
        dispatch(exampleActions.setSign(sign));
    };

    return { refreshExample };
};
