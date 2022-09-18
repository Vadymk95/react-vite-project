import { userSelector } from '../store/selectors';
import { useAppSelector } from './useAppSelector';

export const useAuth = () => {
  const { email, id, token } = useAppSelector(userSelector);
  return {
    isAuth: !!email,
    email,
    id,
    token,
  };
};
