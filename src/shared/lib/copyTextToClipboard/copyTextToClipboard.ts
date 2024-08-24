export const copyTextToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Ошибка:', err);
    }
};
