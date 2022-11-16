import FormField from '../form-field/form-field.component';
import Button from '../button/button.component';
import './auth-form.styles.scss';

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
    <div className='auth__inner-block'>
      <h2 className='auth__title'>{title}</h2>
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
            <Button
              btnVarient={btnVariant}
              type={type}
              className='form__btn'
              key={index}
              onClick={type !== 'submit' ? onGoogleSignIn : () => {}}
            >
              {title}
            </Button>
          ))}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
