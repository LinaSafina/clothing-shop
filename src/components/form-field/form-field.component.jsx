import { FormInput, FormLabel, StyledFormField } from './form-field.styles';

const FormField = ({ label, ...otherProps }) => {
  console.log(otherProps.value);
  return (
    <StyledFormField>
      <FormInput {...otherProps} />
      {label && (
        <FormLabel shrink={otherProps.value.length} htmlFor={otherProps.id}>
          {label}
        </FormLabel>
      )}
    </StyledFormField>
  );
};

export default FormField;
