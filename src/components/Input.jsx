import classNames from 'classnames';
import React, { useEffect } from 'react';

const Input = ({ name, title, type, required, value, handleForm }) => {
  return (
    <div className="signUp-input-group">
      <label htmlFor={name}>{title}</label>
      <input
        name={name}
        type={type}
        required={required}
        vlaue={value}
        onChange={handleForm}
        className="signUp-input"
      />
    </div>
  );
};
export default Input;
