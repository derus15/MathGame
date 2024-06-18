export const isSeedIncludesSign = (input: string): boolean => {
    const validCharacters = ['+', '-', '*', '/'];
    // eslint-disable-next-line no-restricted-syntax
    for (const char of input) {
        if (!validCharacters.includes(char)) {
            return false;
        }
    }
    return true;
};
