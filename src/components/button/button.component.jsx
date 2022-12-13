import { BUTTON_VARIANT_CLASSES } from '../../pages/auth/FORM_DATA';
import './button.styles.scss';

const Button = ({ btnVarient, children, className, ...otherProps }) => {
  return (
    <button
      className={`btn ${BUTTON_VARIANT_CLASSES[btnVarient]} ${className || ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
