export const normalizationOfTheEnd = (time:number): string => {

    if (time % 10 === 1) {
        return `${time} секунда`;
    }
    if (![12, 13, 14].includes(time % 100) && [2, 3, 4].includes(time % 10)) {
        return `${time} секунды`;
    }
    return `${time} секунд`;
};
