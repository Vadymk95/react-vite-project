import { FC, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  OAuthCredential,
} from 'firebase/auth';
import { Form } from './Form';
import { useAppDispatch } from '../hooks';
import { setUser } from '../store/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import { EnumRoutes } from '../router';

export const SignUp: FC = () => {
  const [hasError, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSignUp = (email: {value: string, reset: () => void}, password: {value: string, reset: () => void}) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(({ user }) => {
        const newUser = user as unknown as OAuthCredential;
        dispatch(
          setUser({
            email: user.email,
            token: newUser.accessToken,
            id: user.uid,
          })
        );
        email.reset();
        password.reset();
        navigate(EnumRoutes.MAIN_ROUTE);
        setError(false);
      })
      .catch((e) => {
        console.error(e);
        setError(true);
      });
  };
  return <Form title="Sign Up" isExistUser={hasError} handleClick={handleSignUp} />;
};
