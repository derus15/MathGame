import React, { useEffect } from 'react';
import Result from '../../Result/Result';
import Interface from '../../../component/Interface/Interface';
import ExampleArea from '../../../component/ExampleArea';
import { useDispatch, useSelector } from 'react-redux';
import { resetSession } from '../../../redux/Slices/frontSlices/activitiesSession';

const Home = () => {

    const isResult = useSelector((state) => state.activities.result);
    const dispatch = useDispatch();

    useEffect(() => () => { dispatch(resetSession()); }, []);

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
