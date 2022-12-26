import FormField from '../form-field/form-field.component';
import Button from '../button/button.component';

import { AuthInnerBlock, AuthTitle, FormButton } from './auth-form.styles';

const AuthForm = ({
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
              value={formState[name]}
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
