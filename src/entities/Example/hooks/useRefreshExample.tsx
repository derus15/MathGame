import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import generateExample from 'shared/lib/generateExample/generateExample';
import { exampleActions } from '../model/slice/exampleSlice';
import { getInitialSeed } from '../model/selectors/getInitialSeed';
import { getIterationSeed } from '../model/selectors/getIterationSeed';

export const useRefreshExample = () => {

    const dispatch = useDispatch();
    const initialSeed = useSelector(getInitialSeed);
    const iteration = useSelector(getIterationSeed);

    const refreshExample = () => {

        if (initialSeed !== null) {

            const { example, answer, sign, seed, signList } = generateExample({
                seed: initialSeed,
                iteration,
            });

            dispatch(exampleActions.incrementIteration());
            dispatch(exampleActions.setAnswer(answer));
            dispatch(exampleActions.setExample(example));
            dispatch(exampleActions.setSign(sign));
            dispatch(exampleActions.setSignList(signList));

        }

    };

    useEffect(() => {
        refreshExample();
    }, [initialSeed]);

    return { refreshExample };
};
