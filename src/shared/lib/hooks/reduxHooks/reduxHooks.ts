import { AppDispatch } from 'app/Providers/Store/store';
import { useDispatch } from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
