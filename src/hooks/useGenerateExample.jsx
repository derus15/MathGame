import React, { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

const UseGenerateExample = () => {

    const signList = useSelector(state => state.interface.signList);
    const [sign, SetSign] = useState(signList[Math.floor(Math.random() * signList.length)]);
    const [answer, setAnswer] = useState();
    const [answer, setAnswer] = useState();
    const [example, setExample] = useState();

    const [number, setNumbers] = useState({
        num_1: Math.floor(Math.random() * 100),
        num_2: Math.floor(Math.random() * 100),
    });

    let num_1 = number.num_1;
    let num_2 = number.num_2;

    const signFunction = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    };

    useMemo(() => {
        refresh();
        changeSign();
    }, [signList]); // gameMode

    function changeSign() {
        let signNumber = signList[Math.floor(Math.random() * signList.length)];
        SetSign(signNumber);
    }

    function refresh() {
        const refreshNum = {
            num_1: Math.floor(Math.random() * 100),
            num_2: Math.floor(Math.random() * 100),
        };
        setNumbers(refreshNum);
    }

    function answered(e) {
        if (e.target.value === answer) {
            changeSign();
            refresh();
            e.target.value = '';
        }
    }

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

    setAnswer(String(signFunction[sign](num_1, num_2)));
    setExample(`${num_1} ${sign} ${num_2} =`);

    return [example, answer];

};

export default UseGenerateExample;