import { SignList } from 'app/types/config';

export interface InterfaceSchema {
    time: number,
    number: number,
    gameMode: string,
    signList: SignList[],
    secretCounter: number
    rounds: number,
}
