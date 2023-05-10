import React from 'react';

import { BaseButton, InvertedButton, GoogleButton } from '../styles/button';

const getbutton = (bType) => {
  switch (bType) {
    case 'inverted':
      return InvertedButton;
    case 'google':
      return GoogleButton;
    default:
      return BaseButton;
  }
};

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getbutton(buttonType);

  return CustomButton && <CustomButton {...otherProps}>{children}</CustomButton>;
};
export default Button;
