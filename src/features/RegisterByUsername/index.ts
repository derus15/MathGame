export { RegisterForm } from './UI/RegisterForm/RegisterForm';
export { registerActions, registerReducer } from './model/slice/registerSlice';
export type { RegisterSchema } from './model/slice/types';
export { registerByUsername } from './model/services/registerByUsername/registerByUsername';
export { getRegisterLoadingStatus } from './model/selectors/getRegisterLoadingStatus';
