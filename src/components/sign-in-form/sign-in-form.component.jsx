import { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import { SIGN_IN_FORM_DATA } from '../../pages/auth/FORM_DATA';

import AuthForm from '../auth-form/auth-form.component';

const SignInForm = () => {
  const { formFields, defaultFormFields, btns, title, text } =
    SIGN_IN_FORM_DATA;

  const [formState, setFormState] = useState(defaultFormFields);
  const { email, password } = formState;

  const resetFormFields = () => {
    setFormState(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password': {
          alert('Неверный пароль');
          break;
        }
        case 'auth/user-not-found': {
          alert('Такого пользователя не существует');
          break;
        }
        default:
          console.log('Не получилось войти', error);
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
      onGoogleSignIn={signInWithGoogle}
      formState={formState}
    />
  );
};

export default SignInForm;
