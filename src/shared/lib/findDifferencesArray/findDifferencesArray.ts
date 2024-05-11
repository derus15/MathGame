export const findDifferencesArray = (arr: number[]): number[] => {
    const differences: number[] = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < arr.length; i++) {
        differences.push(Math.abs(arr[i] - arr[i - 1]));
    }

    return differences;
};
