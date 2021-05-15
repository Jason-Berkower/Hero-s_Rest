import { createUser, getOneUser } from '../../services/apiConfig';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Signing.css';

export default function SignUp(props) {
  const defaultInput = {
    username: '',
    email: '',
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
    await createUser(input);
    let res = await getOneUser(input);
    let currentUser = res
    history.push('/');
    return currentUser;
  };

  return (
    <div id="signup">
      <form id="signup-form" onSubmit={handleSubmit}>
        <label>Username:</label>
        <input name="username" type="text" value={input.username} onChange={handleChange} />
        <label>Email:</label>
        <input name="email" type="text" value={input.email} onChange={handleChange} />
        <label>Password:</label>
        <input name="password_digest" type="password" value={input.password_digest} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
