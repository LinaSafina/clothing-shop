import { ChangeEvent, FormEvent, useState } from 'react';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import AuthForm from '../auth-form/auth-form.component';

import { SIGN_IN_FORM_DATA } from '../../pages/auth/FORM_DATA';
import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user.slice';

const SignInForm = () => {
  const { formFields, defaultFormFields, btns, title, text } =
    SIGN_IN_FORM_DATA;

  const [formState, setFormState] = useState(defaultFormFields);
  const { email, password } = formState;

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormState(defaultFormFields);
  };

  const signInWithGoogle = () => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      dispatch(emailSignInStart({ email, password }));

      resetFormFields();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD: {
          alert('Неверный пароль');
          break;
        }
        case AuthErrorCodes.USER_DELETED: {
          alert('Такого пользователя не существует');
          break;
        }
        default:
          console.log('Не получилось войти', error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <AuthForm
      title={title}
      text={text}
      formFields={formFields}
      onChange={handleChange}
      onSubmit={handleSubmit}
      btnProps={btns}
      onGoogleSignIn={signInWithGoogle}
      formState={formState}
    />
  );
};

export default SignInForm;
