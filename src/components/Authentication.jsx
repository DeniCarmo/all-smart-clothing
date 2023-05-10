import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';
import { AuthenticationContainer } from '../styles/authentication';

const Authentication = (props) => {
  return (
    <AuthenticationContainer className="container">
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};
export default Authentication;
