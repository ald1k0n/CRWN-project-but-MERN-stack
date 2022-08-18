import { useState, useContext } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import './sign-in.scss';
import { UserContext } from "../../context/user.context";

const defaultFormFields = {
  username: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = formFields;
  const { login } = useContext(UserContext);

  const resetFields = () => {
    setFormFields(defaultFormFields);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(username, password);
      resetFields();
    } catch (err) {
      alert(err);
    }
    resetFields();
  }


  return (
    <div className="sign-up-container">
      <h2>Already have an account</h2>
      <span>Sign In with your username and password</span>
      <form onSubmit={onFormSubmit}>

        <FormInput
          label="Username"
          type="text"
          name="username"
          required
          onChange={handleChange}
          value={username}
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
