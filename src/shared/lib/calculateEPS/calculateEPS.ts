export const calculateEPS = (example: number, timeFlags: number[][]) => {

    const totalTime = timeFlags.reduce((totalTime, arr) => {

        if (arr.length > 0) {
            const startTime = arr[0];
            const finalTime = arr[arr.length - 1];
            return totalTime + Math.floor((finalTime - startTime));
        }

        return totalTime;

    }, 0);

    if (totalTime === 0) {
        return example === 0 ? '0.00' : '1.00';
    }

    return (example / (totalTime / 1000)).toFixed(2);

};
