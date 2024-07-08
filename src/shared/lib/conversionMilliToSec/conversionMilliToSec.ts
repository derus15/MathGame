export const conversionMilliToSec = (time: number) => {
    
    let seconds: string;
    
    if (time < 1000) {
        seconds = `0,${time}`;
    } else {
        seconds = `${Math.floor(time / 1000)},${(time % 1000).toString().padStart(3, '0')}`;
    }
    
    return seconds;
};
