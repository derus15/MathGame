import { useEffect, useState } from 'react';
import { ExampleButton } from 'shared/UI/Button/ExampleButton/ExampleButton';

export const BugButton = () => {

    const [error, setError] = useState(false);

    const throwError = () => {
        setError((prev) => !prev);
    };

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <ExampleButton onClick={throwError}>
            Бросить ошибку
        </ExampleButton>
    );
};
