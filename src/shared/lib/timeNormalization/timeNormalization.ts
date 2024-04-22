export const timeNormalization = (seconds: number, isHours: boolean = true): string => {

    if (!seconds) {
        return isHours ? '00:00:00' : '00:00';
    }

    let hours = Math.floor(seconds / 3600).toString();
    if (hours.length < 2) {
        hours = `0${hours}`;
    }

    let minutes = Math.floor((seconds % 3600) / 60).toString();
    if (minutes.length < 2) {
        minutes = `0${minutes}`;
    }

    let sec = (seconds % 60).toString();
    if (sec.length < 2) {
        sec = `0${sec}`;
    }

    return isHours ? `${hours}:${minutes}:${sec}` : `${minutes}:${sec}`;
};
