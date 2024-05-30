import { SignList } from 'app/types/config';

const encodeBase64 = (input: string) => btoa(input);

export const generateSeed = (signList: SignList[]) => {
    const signsString = signList.join('');
    const randomString = Math.random().toString(36).substring(2, 15);
    const combinedString = signsString + randomString;
    return encodeBase64(combinedString);
};
