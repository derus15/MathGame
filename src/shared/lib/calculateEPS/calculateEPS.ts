export const calculateEPS = (example: number, time: number) => {

    if (time === 0 && example === 0) {
        return '0.00';
    }

    if (time === 0 && example === 1) {
        return '1.00';
    }
    
    if (time === 0) {
        return '1.00';
    }

    return (example / time).toFixed(2);

};
