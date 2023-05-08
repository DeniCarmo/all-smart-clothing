import { useState, useContext } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../utils/firebase/firebase.utils';
import Button from './Button';

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
    <section className="signIn">
      <h2>Sign In</h2>

      <div className="signIn-input-group">
        <input
          type="email"
          className="signIn-input"
          name="email"
          value={email}
          onChange={handleForm}
          required
        />
        <label
          htmlFor="email"
          className={`signIn-label${email.length ? ' signIn-label--shrink' : ''}`}
        >
          Email
        </label>
      </div>

      <div className="signIn-input-group">
        <input
          type="password"
          className="signIn-input"
          name="password"
          value={password}
          onChange={handleForm}
          required
        />
        <label
          htmlFor="password"
          className={`signIn-label${password.length ? ' signIn-label--shrink' : ''}`}
        >
          Password
        </label>
      </div>

      <div className="signIn-buttons">
        <Button onClick={handleSignIn}>Sign In</Button>

        <Button buttonType="google" onClick={signInWithGoogle}>
          Google Auth
        </Button>
      </div>
    </section>
  );
};
export default SignIn;
