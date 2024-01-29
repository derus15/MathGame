import React, { useEffect } from 'react';
import Result from '../../Result/Result';
import { Interface } from 'component/Interface';
import ExampleArea from 'component/ExampleArea';
import { useDispatch, useSelector } from 'react-redux';
import { getResult, sessionActions } from 'component/Session';

const Home = () => {

    const isResult = useSelector(getResult);
    const dispatch = useDispatch();

    useEffect(() => () => { dispatch(sessionActions.resetSession()); }, []);

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
