export const calculateMinMaxNumber = (numberList: number[], mode: 'max' | 'min', condition: boolean) => {
    const exampleList: number[] = [...numberList];
    let result: number;

    if (condition) {
        exampleList.pop();
    }

    if (mode === 'max') {
        result = Math.max(...exampleList);
    } else {
        result = Math.min(...exampleList);
    }

    return result;
};
