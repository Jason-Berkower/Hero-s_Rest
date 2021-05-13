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
      <h2>Create a Post!</h2>
      <form id="post-container" onChange={handleChage} onSubmit={handleSubmit}>
        <label>Title:</label>
        <input name="title" type="text" value={input.title} />
        <label>Content:</label>
        <input name="content" type="textarea" value={input.content} />
        <button type="submit" />
      </form>
    </div>
  )
}
