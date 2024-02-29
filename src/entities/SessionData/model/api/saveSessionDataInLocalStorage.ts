import { store } from 'app/Providers/Store/store';

export const saveSessionDataInLocalStorage = () => {

    const state = store.getState();

    const { isAuth } = state.user;
    const { sessionPoints } = state.sessionData;
    const { sessionTime } = state.sessionData;

    const sessionGameMode = state.interface.gameMode;
    const sessionSignList = state.interface.signList;

    const actualSessionData = {
        mode: sessionGameMode,
        number: sessionPoints,
        time: sessionTime,
        sign: sessionSignList,
    };

    if (!isAuth) {
        localStorage.setItem('lastSessionData', JSON.stringify(actualSessionData));
    }

};
