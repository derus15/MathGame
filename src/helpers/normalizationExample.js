const signFunction = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

function normalizationExample(nums, sign, setAnswer) {

    let [num_1, num_2] = nums;
    
    if ((sign === '-') && (num_1 < num_2)) {
        [num_1, num_2] = [num_2, num_1];

    } else if (sign === '/') {

        if (num_1 === 0) {
            num_1 += 1;
        }

        if (num_1 > 10 && num_1 < 100) {
            num_2 = Math.floor(num_2 / 10) + 1;
        }

        num_1 *= num_2; // (num_1 * num_2) * num*2 = answer => answer = num_1 / num_2
    }

    const answerExample = String(signFunction[sign](num_1, num_2));
    setAnswer(answerExample);

    return (`${num_1} ${sign} ${num_2} =`);
}

export default normalizationExample;
