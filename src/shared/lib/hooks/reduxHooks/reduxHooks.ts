import { AppDispatch } from 'app/Providers/Store/types';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
