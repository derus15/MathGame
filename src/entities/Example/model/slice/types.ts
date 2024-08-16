import { Sign } from 'app/types/config';

export interface ExampleSchema {
    numbersList: number[],
    sign: Sign,
    answer: string
    example: string,
    seed: string,
    isRetry: boolean,
    iterationSeed: number,
    signList: Sign[],
    isPersonalSeed: boolean,
}
