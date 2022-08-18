import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-up.scss';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
    console.log(formFields);
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password and confirm password aren't same");
      return;
    }

    // try {
    //   const response = await createAuthUserWithEmailAndPassword(
    //     email,
    //     password
    //   );
    //   await createUserDocumentFromAuth(response.user, { displayName });
    //   resetFields();
    // } catch (err) {
    //   alert(
    //     err.message === "Firebase: Error (auth/email-already-in-use)."
    //       ? "Email already in use"
    //       : err.message
    //   );
    //   resetFields();
    // }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={onFormSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          required
          onChange={handleChange}
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          required
          onChange={handleChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          minLength="8"
          required
          onChange={handleChange}
          value={password}
        />

        <FormInput
          label="Confirm password"
          type="password"
          name="confirmPassword"
          minLength="8"
          required
          onChange={handleChange}
          value={confirmPassword}
        />
        <Button type='submit'>
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
