import { useState } from 'react';
import { createPost } from '../../../services/apiConfig';
import { useHistory } from 'react-router-dom';
import './CreatePost.css';

export default function CreatePost(props) {
  const [input, setInput] = useState({});

  let history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost(props.currentUser.id, props.currentCharacter.id, input);
    history.push('/');
  };

  return (
    <div>
      <h2>Create a Post!</h2>
      <form id="post-container" onChange={handleChange} onSubmit={handleSubmit}>
        <label>Title:</label>
        <input name="title" type="text" value={input.title} />
        <label>Content:</label>
        <input name="content" type="textarea" value={input.content} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
