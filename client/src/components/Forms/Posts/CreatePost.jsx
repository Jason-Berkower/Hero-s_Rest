import { useState } from 'react';
import { createPost } from '../../../services/apiConfig';
import './CreatePost.css';

export default function CreatePost() {
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createPost(input);
    return res;
  };

  return (
    <div>

    </div>
  )
}
