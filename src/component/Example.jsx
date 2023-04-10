import React from 'react';

const Example = ({number, sign, setAnswer}) => {

    const signFunction = {
        '+': (a,b) => a + b,
        '-': (a,b) => a - b,
        '*': (a,b) => a * b,
        '/': (a,b) => a / b,
    }

    function generateExample(num_1, num_2) {
        if ((sign === '-') && (num_1 < num_2)) {
            [num_1, num_2] = [num_2, num_1];
        }

        else if (sign === '/') {
            if (num_1 === 0){
                num_1 += 1;
            }
            if (num_1 > 10 && num_1 < 100) {
                num_2 = Math.floor(num_2 / 10) + 1;
            }

        let answer = num_1 * num_2;
        [num_1, answer] = [answer, num_1];

        }

        setAnswer(String(signFunction[sign](num_1, num_2)));
        return (<div>{num_1} {sign} {num_2} =</div>)
    }

    return (
        <div>
            {generateExample(number.num_1, number.num_2)}
        </div>
    );
};

export default Example;