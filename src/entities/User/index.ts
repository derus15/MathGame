export { userReducer, userActions } from './model/slice/userSlice';
export type { UserSchema } from './model/slice/types';
export { getIsAuth } from './model/selectors/getIsAuth/getIsAuth';
export { useGetInitAuthDataQuery } from './model/api/initUserDataApi';
