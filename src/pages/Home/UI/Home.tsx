import React, { useEffect } from 'react';
import Result from '../../Result/Result';
import { Interface } from 'widgets/Interface';
import ExampleArea from 'component/ExampleArea';
import { useDispatch, useSelector } from 'react-redux';
import { getResult, sessionActions } from 'entities/Session';

const Home = () => {

    const isResult = useSelector(getResult);
    const dispatch = useDispatch();

    useEffect(() => () => { dispatch(sessionActions.resetSessionProgress()); }, []);

    if (isResult) {
        return <Result />;
    }
    
    return (
        <>
            <Interface />
            <ExampleArea />
        </>
    );
};

export default Home;
