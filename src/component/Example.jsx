import React from 'react';

const Example = ({ number, sign, setAnswer }) => {
    
    const signFunction = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    function generateExample() {

        let { num_1 } = number;
        let { num_2 } = number;

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

    return (generateExample());
};

export default Example;
