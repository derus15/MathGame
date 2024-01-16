import React, { useEffect } from 'react';
import Result from '../../Result/Result';
import { Interface } from 'component/Interface';
import ExampleArea from 'component/ExampleArea';
import { useDispatch, useSelector } from 'react-redux';
import { activitiesSessionActions } from 'redux/Slices/frontSlices/activitiesSession/activitiesSession';
import { StateSchema } from 'redux/types';

const Home = () => {

    const isResult = useSelector((state: StateSchema) => state.activities.result);
    const dispatch = useDispatch();

    useEffect(() => () => { dispatch(activitiesSessionActions.resetSession()); }, []);

    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {isResult ? (
                <Result />
            ) : (
                <>
                    <Interface />
                    <ExampleArea />
                </>
            )}
        </>
    );
};

export default Home;
