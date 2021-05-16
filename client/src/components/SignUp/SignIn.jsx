import { signIn } from '../../services/apiConfig';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Signing.css';

export default function SignIn(props) {
  const defaultInput = {
    username: '',
    password_digest: '',
  };

  let history = useHistory();

  const [input, setInput] = useState(defaultInput);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await signIn(input);
    console.log(res);
    if (!res.message) {
      props.setCurrentUser(res);
      history.push('/')
    };
  };

  return (
    <div id="signin">
      <form id="signin-form" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input name="username" type="text" value={input.username} onChange={handleChange} />
        <label>Password:</label>
        <input name="password_digest" type="password" value={input.password_digest} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
