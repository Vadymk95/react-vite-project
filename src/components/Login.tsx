import { FC } from 'react';
import { getAuth, OAuthCredential, signInWithEmailAndPassword } from 'firebase/auth';
import { Form } from './Form';
import { useAppDispatch } from '../hooks';
import { setUser } from '../store/slices/userSlice';
import { EnumRoutes } from '../router';
import { useNavigate } from 'react-router-dom';

export const Login: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = (email: {value: string, reset: () => void}, password: {value: string, reset: () => void}) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(({ user }) => {
        const newUser = user as unknown as OAuthCredential;
        dispatch(setUser({
          email: user.email,
          token: newUser.accessToken,
          id: user.uid,
        }));
        email.reset();
        password.reset();
        navigate(EnumRoutes.MAIN_ROUTE);
      })
      .catch(console.error);
  };
  return <Form title="Sign In" handleClick={handleLogin} />;
};
