import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AuthError, AuthErrorCodes } from 'firebase/auth';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { selectAuthError } from '../../store/user/user.selectors';

import { StyledAuth } from './auth.styles';

const Auth = () => {
  const authError = useSelector(selectAuthError);

  useEffect(() => {
    if (authError) {
      switch ((authError as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD: {
          alert('Неверный пароль');
          break;
        }
        case AuthErrorCodes.USER_DELETED: {
          alert('Такого пользователя не существует');
          break;
        }

        case AuthErrorCodes.EMAIL_EXISTS: {
          alert('Пользователь с данной почтой уже существует');
          break;
        }
        case AuthErrorCodes.INVALID_EMAIL: {
          alert('Проверьте правильность введенной почты');
          break;
        }
        case AuthErrorCodes.WEAK_PASSWORD: {
          alert('Пароль должен содержать хотя бы 6 символов');
          break;
        }

        default:
          alert(`Что-то пошло не так ${authError.message}`);
      }
    }
  }, [authError]);

  return (
    <StyledAuth>
      <SignInForm />
      <SignUpForm />
    </StyledAuth>
  );
};

export default Auth;
