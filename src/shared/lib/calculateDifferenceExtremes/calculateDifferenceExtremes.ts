export const calculateDifferenceExtremes = (array: number[][]) => {

    if (!array || array.length === 0 || array[0].length === 0) {
        return;
    }

    return array.reduce((totalTime, arr) => {

        if (arr.length > 0) {
            const startTime = arr[0];
            const finalTime = arr[arr.length - 1];
            return totalTime + Math.floor((finalTime - startTime) / 1000);
        }

        return totalTime;

    }, 0);
};
