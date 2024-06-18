export const isDecodeBase64 = (input: string): string => {
    try {
        return atob(input);
    } catch (e) {
        return '-1';
    }
};
