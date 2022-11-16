import './form-field.styles.scss';

const FormField = ({ label, ...otherProps }) => {
  console.log(otherProps.value);
  return (
    <div className='form-field'>
      <input className='form__input' {...otherProps} />
      {label && (
        <label
          className={`${otherProps.value.length ? 'shrink' : ''} form__label`}
          htmlFor={otherProps.id}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormField;
