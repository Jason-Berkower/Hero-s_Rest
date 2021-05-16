import { getOneUser } from '../../services/apiConfig';
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

  };

  return (
    <div>

    </div>
  )
}
