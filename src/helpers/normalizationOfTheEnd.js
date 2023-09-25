export const normalizationOfTheEnd = (time) => {

    if (time % 10 === 1) {
        return time + ' секунда';
    } else if (![12, 13, 14].includes(time % 100) && [2, 3, 4].includes(time % 10)) {
        return time + ' секунды';
    } else {
        return time + ' секунд';
    }
};