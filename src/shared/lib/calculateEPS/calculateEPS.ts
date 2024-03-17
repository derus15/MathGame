export const calculateEPS = (example: number, time: number) => {

    if (time === 0) {
        return '1.00';
    }

    return (example / time).toFixed(2);

};
