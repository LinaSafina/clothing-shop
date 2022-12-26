import { BUTTON_VARIANT_CLASSES } from './BUTTON_VARIANT_CLASSES';
import { BaseButton, SecondaryButton, InvertedButton } from './button.styles';

const getButton = (buttonVarient = BUTTON_VARIANT_CLASSES.base) => {
  return {
    [BUTTON_VARIANT_CLASSES.base]: BaseButton,
    [BUTTON_VARIANT_CLASSES.secondary]: SecondaryButton,
    [BUTTON_VARIANT_CLASSES.inverted]: InvertedButton,
  }[buttonVarient];
};

const Button = ({ btnVarient, children, className, ...otherProps }) => {
  const CustomButton = getButton(btnVarient);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
