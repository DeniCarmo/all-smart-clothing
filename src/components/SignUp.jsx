import { useContext, useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../utils/firebase/firebase.utils';
import classNames from 'classnames';
import Button from './Button';

const SignUp = (props) => {
  const [form, setForm] = useState({
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const { email, displayName, password, passwordConfirm } = form;

  const passAlert = classNames('signUp-pass-confirm', {
    'signUp-pass-confirm--alert': password !== passwordConfirm,
  });

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
    <section className="signUp">
      <h2 className="signUp-title">Don't have an account?</h2>
      <span className="signUp-subtitle">Sign up with your email and passwod</span>

      <div className="signUp-input-group">
        <input
          type="text"
          className="signUp-input"
          name="displayName"
          value={displayName}
          onChange={handleForm}
          required
        />
        <label
          htmlFor="displayName"
          className={`signUp-label${displayName.length ? ' signUp-label--shrink' : ''}`}
        >
          Display Name
        </label>
      </div>

      <div className="signUp-input-group">
        <input
          type="email"
          className="signUp-input"
          name="email"
          value={email}
          onChange={handleForm}
          required
        />
        <label
          htmlFor="email"
          className={`signUp-label${email.length ? ' signUp-label--shrink' : ''}`}
        >
          Email
        </label>
      </div>

      <div className="signUp-input-group">
        <input
          type="password"
          className="signUp-input"
          name="password"
          value={password}
          onChange={handleForm}
          required
        />
        <label
          htmlFor="password"
          className={`signUp-label${password.length ? ' signUp-label--shrink' : ''}`}
        >
          Password
        </label>
      </div>

      <div className="signUp-input-group">
        <input
          type="password"
          className="signUp-input"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleForm}
          required
        />
        <label
          htmlFor="passwordConfirm"
          className={`signUp-label${passwordConfirm.length ? ' signUp-label--shrink' : ''}`}
        >
          Confirm Password
        </label>
      </div>

      <p className={passAlert}>Passwords must match</p>

      <Button onClick={handleSubmit}>Send</Button>
    </section>
  );
};
export default SignUp;
