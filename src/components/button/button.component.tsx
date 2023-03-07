import { BUTTON_VARIANT_CLASSES } from './constants';
import { BaseButton, SecondaryButton, InvertedButton } from './button.styles';
import { ButtonHTMLAttributes, FC } from 'react';

const getButton = (
  buttonVarient = BUTTON_VARIANT_CLASSES.base
): typeof BaseButton => {
  return {
    [BUTTON_VARIANT_CLASSES.base]: BaseButton,
    [BUTTON_VARIANT_CLASSES.secondary]: SecondaryButton,
    [BUTTON_VARIANT_CLASSES.inverted]: InvertedButton,
  }[buttonVarient];
};

type ButtonProps = {
  btnVarient?: BUTTON_VARIANT_CLASSES;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  btnVarient,
  children,
  className,
  ...otherProps
}) => {
  const CustomButton = getButton(btnVarient);

  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
