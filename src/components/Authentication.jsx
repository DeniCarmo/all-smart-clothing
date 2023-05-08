import React from 'react';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Authentication = (props) => {
  return (
    <div className="authentication container">
      <SignIn />
      <SignUp />
    </div>
  );
};
export default Authentication;
