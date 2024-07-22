import { SignList } from 'app/types/config';
import { Modifications } from 'features/Modifications/model/slice/types';

export interface SessionDataSchema {
    sessionPoints: number,
    sessionTime: number,
    sessionEPS: string,
    sessionExampleList: string[],
    sessionTimeFlags: number[][],
    sessionHungerRounds: number,
    sessionErrors: number,
}

export interface SessionDataSaveSchema {
    mode: string;
    number: number;
    time: number;
    sign: SignList[];
    eps: string;
    modifications: Modifications[],
    unexpectedEnd: boolean,
}
