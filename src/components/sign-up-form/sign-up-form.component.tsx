import { ChangeEvent, FormEvent, useState } from 'react';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { useDispatch } from 'react-redux';

import { SIGN_UP_FORM_DATA } from '../../pages/auth/FORM_DATA';
import AuthForm from '../auth-form/auth-form.component';
import { signUpUserStart } from '../../store/user/user.slice';

const SignUpForm = () => {
  const { formFields, defaultFormFields, btns, title, text } =
    SIGN_UP_FORM_DATA;

  const [formState, setFormState] = useState(defaultFormFields);
  const { login, email, password, confirmPassword } = formState;

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormState(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      dispatch(signUpUserStart({ email, password, login }));

      resetFormFields();
    } catch (error) {
      switch ((error as AuthError).code) {
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
          console.log('Не получилось зарегистрироваться', error);
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
      formState={formState}
    />
  );
};

export default SignUpForm;
