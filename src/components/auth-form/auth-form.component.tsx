import { ChangeEventHandler, FC, FormEventHandler } from 'react';
import { BUTTON_VARIANT_CLASSES } from '../button/constants';
import FormField from '../form-field/form-field.component';

import { AuthInnerBlock, AuthTitle, FormButton } from './auth-form.styles';

type FormState = { email: string; password: string };

type AuthFormProps = {
  formFields: {
    label: string;
    type: string;
    name: string;
    id: string;
    required: boolean;
  }[];
  formState: FormState;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: FormEventHandler<HTMLFormElement>;
  btnProps: {
    title: string;
    type: 'button' | 'reset' | 'submit' | undefined;
    btnVariant: BUTTON_VARIANT_CLASSES;
  }[];
  title: string;
  text: string;
  onGoogleSignIn?: () => void;
};

const AuthForm: FC<AuthFormProps> = ({
  formFields,
  formState,
  onChange,
  onSubmit,
  btnProps,
  title,
  text,
  onGoogleSignIn,
}) => {
  return (
    <AuthInnerBlock>
      <AuthTitle>{title}</AuthTitle>
      <p className='auth__text'>{text}</p>
      <form className='auth-form' onSubmit={onSubmit}>
        {formFields.map(({ label, name, ...inputProps }, index) => {
          return (
            <FormField
              key={index}
              label={label}
              {...inputProps}
              onChange={onChange}
              name={name}
              value={formState[name as keyof FormState]}
            />
          );
        })}
        <div className='form__actions'>
          {btnProps.map(({ title, type, btnVariant }, index) => (
            <FormButton
              btnVarient={btnVariant}
              type={type}
              key={index}
              onClick={type !== 'submit' ? onGoogleSignIn : () => {}}
            >
              {title}
            </FormButton>
          ))}
        </div>
      </form>
    </AuthInnerBlock>
  );
};

export default AuthForm;
