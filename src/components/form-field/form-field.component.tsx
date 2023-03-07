import { FC, InputHTMLAttributes } from 'react';
import { FormInput, FormLabel, StyledFormField } from './form-field.styles';

type FormFieldsProps = {
  label: string;
  id: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormField: FC<FormFieldsProps> = ({ label, ...otherProps }) => {
  return (
    <StyledFormField>
      <FormInput {...otherProps} />
      {label && (
        <FormLabel
          shrink={Boolean(
            otherProps.value &&
              typeof otherProps.value === 'string' &&
              otherProps.value.length
          )}
          htmlFor={otherProps.id}
        >
          {label}
        </FormLabel>
      )}
    </StyledFormField>
  );
};

export default FormField;
