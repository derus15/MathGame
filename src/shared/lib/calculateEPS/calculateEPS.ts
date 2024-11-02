export const calculateEPS = (example: number, time: number) => {

    if (time === 0) {
        return example === 0 ? '0.00' : '1.00';
    }

    return (example / (time / 1000)).toFixed(2);

};
