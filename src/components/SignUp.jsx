import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
import Button from './Button';
import {
  FormContainer,
  FormInput,
  FormInputGroup,
  FormLabel,
  ConfirmText,
} from '../styles/formStyles';

const SignUp = (props) => {
  const [form, setForm] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { email, displayName, password, passwordConfirm } = form;

  const handleSubmit = async () => {
    if (password !== passwordConfirm) return;

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });

      setForm({
        displayName: '',
        email: '',
        password: '',
        passwordConfirm: '',
      });
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      } else {
        console.log(err);
      }
    }
  };

  const handleForm = (e) => {
    const { value, name } = e.target;

    setForm((pVal) => ({ ...pVal, [name]: value }));
  };

  return (
    <FormContainer>
      <h2 className="signUp-title">Don't have an account?</h2>
      <span className="signUp-subtitle">Sign up with your email and passwod</span>

      <FormInputGroup>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleForm}
          required
        />
        <FormLabel htmlFor="displayName" shrink={displayName.length}>
          Display Name
        </FormLabel>
      </FormInputGroup>

      <FormInputGroup>
        <FormInput type="email" name="email" value={email} onChange={handleForm} required />
        <FormLabel htmlFor="email" shrink={email.length}>
          Email
        </FormLabel>
      </FormInputGroup>

      <FormInputGroup>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleForm}
          required
        />
        <FormLabel htmlFor="password" shrink={password.length}>
          Password
        </FormLabel>
      </FormInputGroup>

      <FormInputGroup>
        <FormInput
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleForm}
          required
        />
        <FormLabel htmlFor="passwordConfirm" shrink={passwordConfirm.length}>
          Confirm Password
        </FormLabel>
      </FormInputGroup>

      <ConfirmText confirm={password !== passwordConfirm ? 1 : 0}>Passwords must match</ConfirmText>

      <Button onClick={handleSubmit}>Send</Button>
    </FormContainer>
  );
};
export default SignUp;
