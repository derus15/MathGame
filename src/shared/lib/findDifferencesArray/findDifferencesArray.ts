export const findDifferencesArray = (arr: number[][]): number[] => {

    const differences: number[] = [];
    
    // eslint-disable-next-line no-restricted-syntax
    for (const round of arr) {

        // eslint-disable-next-line no-plusplus
        for (let i = 1; i < round.length; i++) {
            differences.push(Math.abs(round[i] - round[i - 1]));
        }
            
    }
        
    return differences;

};
