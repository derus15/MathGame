import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getInterfaceSignsList } from 'widgets/Interface';
import generateExample from 'shared/lib/generateExample/generateExample';
import { exampleActions } from '../model/slice/exampleSlice';
import { StateSchema } from 'app/Providers/Store/types';

export const useRefreshExample = () => {

    const dispatch = useDispatch();
    const signList = useSelector(getInterfaceSignsList);

    const initialSeed = useSelector((state: StateSchema) => state.example.seed);
    const [iteration, setIteration] = useState(0);

    const refreshExample = () => {

        if (initialSeed !== null) {

            const { example, answer, sign, seed, nextIteration } = generateExample({
                signList,
                seed: initialSeed,
                iteration,
            });

            console.log(nextIteration);
            console.log(seed);

            setIteration(nextIteration);
            dispatch(exampleActions.setAnswer(answer));
            dispatch(exampleActions.setExample(example));
            dispatch(exampleActions.setSign(sign));

        }

    };

    useEffect(() => {
        refreshExample();
    }, [initialSeed]);

    return { refreshExample };
};
