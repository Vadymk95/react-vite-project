import { userSelector } from '../store/selectors';
import { useAppSelector } from './useAppSelector';

export const useAuth = () => {
  const { email, id, token, isAuth } = useAppSelector(userSelector);
  return {
    isAuth,
    email,
    id,
    token,
  };
};
