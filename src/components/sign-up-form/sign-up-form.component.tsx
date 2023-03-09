import { ChangeEvent, FormEvent, useState } from 'react';
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
      alert('Passwords do not match');
      return;
    }

    dispatch(signUpUserStart({ email, password, login }));

    resetFormFields();
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
