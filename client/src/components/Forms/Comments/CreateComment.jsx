import { useState } from 'react';
import { createComment } from '../../../services/apiConfig';
import './Comment.css';

export default function CreateComment(props) {
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
    const res = await createComment(input);
    return res;
  };

  return (
    <div>
      <h3 id="comment-container-title">Comment:</h3>
      <form id="comment-container" onChange={handleChange} onSubmit={handleSubmit}>
        <input name="content" type="textarea" value={input.content} placeholder="Comment here." />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
