export const conversionMilliToSec = (time: number) => {
    
    let seconds: string;
    
    if (time < 10) {
        seconds = `0,00${time}`;
    } else if (time < 100) {
        seconds = `0,0${time}`;
    } else if (time < 1000) {
        seconds = `0,${time}`;
    } else {
        seconds = `${Math.floor(time / 1000)},${(time % 1000).toString().padStart(3, '0')}`;
    }
    
    return seconds;
};
