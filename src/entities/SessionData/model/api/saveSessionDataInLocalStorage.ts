import { store } from 'app/Providers/Store/store';
import { SessionDataSaveSchema } from 'entities/SessionData/model/services/sendSessionData';

// export const saveSessionDataInLocalStorage = () => {
//
//     const state = store.getState();
//
//     const { isAuth } = state.user;
//     const { sessionPoints } = state.sessionData;
//     const { sessionTime } = state.sessionData;
//     const { sessionEPS } = state.sessionData;
//     const { modificationsList } = state.modifications;
//
//     const sessionUnexpectedEnd = state.session.unexpectedEnd;
//     const sessionGameMode = state.interface.gameMode;
//     const sessionSignList = state.interface.signList;
//
//     const actualSessionData: SessionDataSaveSchema = {
//         mode: sessionGameMode,
//         number: sessionPoints,
//         time: sessionTime,
//         sign: sessionSignList,
//         eps: sessionEPS,
//         modifications: modificationsList,
//         unexpectedEnd: sessionUnexpectedEnd,
//     };
//
//     if (!isAuth) {
//         localStorage.setItem('lastSessionData', JSON.stringify(actualSessionData));
//     }
//
// };
