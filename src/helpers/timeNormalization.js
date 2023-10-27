export const timeNormalization = (time) => {

    if (!time) {
        return ('00:00:00');
    }

    let hours = Math.floor(time / 3600).toString();
    if (hours.length < 2) {
        hours = `0${hours}`;
    }

    let minutes = Math.floor((time % 3600) / 60).toString();
    if (minutes.length < 2) {
        minutes = `0${minutes}`;
    }

    let sec = (time % 60).toString();
    if (sec.length < 2) {
        sec = `0${sec}`;
    }

    return (`${hours}:${minutes}:${sec}`);
};
