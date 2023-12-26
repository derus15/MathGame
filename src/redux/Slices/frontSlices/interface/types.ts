import { SignList } from '../../../../types/config';

export interface InterfaceSchema {
    time: number,
    number: number,
    mode: string,
    signList: SignList[],
    modifications: string,
}
