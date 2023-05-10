import { useState } from 'react';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../utils/firebase/firebase.utils';
import Button from './Button';

import {
  FormContainer,
  FormInput,
  FormInputGroup,
  FormLabel,
  FormButtons,
} from '../styles/formStyles';

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = form;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleForm = (e) => {
    const { name, value } = e.target;

    setForm((pVal) => ({ ...pVal, [name]: value }));
  };

  const handleSignIn = async () => {
    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      setForm({
        email: '',
        password: '',
      });
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Password is incorrect.');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this e-mail.');
          break;
        default:
          console.log(err);
          break;
      }
    }
  };

  return (
    <FormContainer>
      <h2>Sign In</h2>

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

      <FormButtons>
        <Button onClick={handleSignIn}>Sign In</Button>

        <Button buttonType="google" onClick={signInWithGoogle}>
          Google Auth
        </Button>
      </FormButtons>
    </FormContainer>
  );
};
export default SignIn;
