import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.scss';

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    // try {
    //   const response = await signInAuthUser(email, password);
    //   resetFields();
    // } catch (err) {
    //   switch (err.code) {
    //     case 'auth/wrong-password': {
    //       alert("Password is wrong");
    //       break;
    //     }
    //     case 'auth/user-not-found': {
    //       alert("User not found");
    //       break;
    //     }
    //     default: break;
    //   }
    //   resetFields();
    // }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={onFormSubmit}>

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
        <div className='buttons-container'>
          <Button type='submit'>
            Sign In
          </Button>
        </div>

      </form>
    </div>
  );
};

export default SignInForm;
