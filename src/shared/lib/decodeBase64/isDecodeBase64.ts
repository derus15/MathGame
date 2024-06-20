export const isDecodeBase64 = (input: string): string => {
    try {
        const error = new Error('no text in input');
        if (input === '') {
            throw error;
        }
        return atob(input);
    } catch (e) {
        return '-1';
    }
};
