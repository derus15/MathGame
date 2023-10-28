import React from 'react';
import { useSelector } from 'react-redux';

const Example = ({ sign, setAnswer }) => {

    const [num_1, num_2] = useSelector((state) => state.example.numbers);
    
    const signFunction = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    function generateExample(num_1, num_2) {

        if ((sign === '-') && (num_1 < num_2)) {
            [num_1, num_2] = [num_2, num_1];

        } else if (sign === '/') {

            if (num_1 === 0) {
                num_1 += 1;
            }

            if (num_1 > 10 && num_1 < 100) {
                num_2 = Math.floor(num_2 / 10) + 1;
            }

            let answer = num_1 * num_2;
            [num_1, answer] = [answer, num_1];
        }

        const answerExample = String(signFunction[sign](num_1, num_2));
        setAnswer(answerExample);

        return (
            <div>
                {num_1} {sign} {num_2} =
            </div>
        );
    }

    return (generateExample(num_1, num_2));
};

export default Example;
