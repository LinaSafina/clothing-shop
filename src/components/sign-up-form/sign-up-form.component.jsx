import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import { SIGN_UP_FORM_DATA } from '../../pages/auth/FORM_DATA';
import AuthForm from '../auth-form/auth-form.component';
import { setCurrentUser } from '../../store/user/user.actions';

const SignUpForm = () => {
  const { formFields, defaultFormFields, btns, title, text } =
    SIGN_UP_FORM_DATA;

  const [formState, setFormState] = useState(defaultFormFields);
  const { login, email, password, confirmPassword } = formState;

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormState(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName: login });
      dispatch(setCurrentUser(user));
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use': {
          alert('Пользователь с данной почтой уже существует');
          break;
        }
        case 'auth/invalid-email': {
          alert('Проверьте правильность введенной почты');
          break;
        }
        case 'auth/weak-password': {
          alert('Пароль должен содержать хотя бы 6 символов');
          break;
        }
        default:
          console.log('Не получилось зарегистрироваться', error);
      }
    }
  };

  const handleChange = (event) => {
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
