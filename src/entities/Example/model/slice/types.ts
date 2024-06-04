import { SignList } from 'app/types/config';

export interface ExampleSchema {
    numbersList: number[],
    sign: SignList,
    answer: string
    example: string,
    seed: string,
    isRetry: boolean,
}
